import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Block common malicious bot patterns and hacking probes
const BLOCKED_PATTERNS = [
  'wp-admin', 'wp-login', '.php', '.env', '.git', 'xmlrpc', 'cgi-bin', 'config.js',
  'payload.js', 'eval(', '<script', 'select * from', '-- ', '; drop', 'autodiscover',
  'etc/passwd', '../', '..\\', 'javascript:'
];

const BLOCKED_USER_AGENTS = [
  'python-requests', 'curl', 'scrapy', 'headless', 'phantomjs', 'selenium', 
  'postman', 'insomnia', 'wget', 'nmap', 'sqlmap', 'nikto'
];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const url = pathname.toLowerCase() + search.toLowerCase();

  // 1. Strict User-Agent Filtering
  if (BLOCKED_USER_AGENTS.some(ua => userAgent.includes(ua))) {
    return new NextResponse('Access Denied: Terminal/Bot Client Detected', { status: 403 });
  }

  // 2. Deep Request Sanitization (Malicious Patterns)
  const isMalicious = BLOCKED_PATTERNS.some(pattern => url.includes(pattern));

  if (isMalicious) {
    console.warn(`[SECURITY ALERT] Path violation at ${pathname} by ${userAgent}`);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Security Breach Detected', 
        code: 'SEC_PATH_VIOLATION_0x8080',
        ref: crypto.randomUUID().slice(0, 8)
      }),
      { 
        status: 403, 
        headers: { 'content-type': 'application/json' } 
      }
    );
  }

  // 3. Prevent Protocol Downgrade & Enforce Secure Headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Skyward-Security', 'MOSSAD_LEVEL_ENFORCED');
  
  return response;
}

// Only run on specific paths to avoid overhead on static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - media (public media assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|media).*)',
  ],
};
