export async function GET() {
    return Response.json({
        timestamp: Date.now(),
        iso: new Date().toISOString()
    });
}
