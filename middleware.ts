import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const canonicalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com';
const canonicalOrigin = new URL(canonicalSiteUrl).origin;
const canonicalHost = new URL(canonicalSiteUrl).host;

function isLocalHost(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local');
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  if (isLocalHost(nextUrl.hostname)) {
    return NextResponse.next();
  }

  if (nextUrl.host !== canonicalHost) {
    const redirectUrl = new URL(`${canonicalOrigin}${nextUrl.pathname}${nextUrl.search}`);
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
