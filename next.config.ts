import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* static export for github pages */
  output: 'export',
  images: {
    unoptimized: true, // Static export doesn't support Next.js image optimization API
  },
  trailingSlash: true, // Recommended for static hosting
  /*
  // NOTE: headers() is not supported by 'output: export'. 
  // Security headers must be handled by the CDN (e.g. Cloudflare) for GitHub Pages.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          ...
        ],
      },
    ];
  },
  */
};

export default nextConfig;
