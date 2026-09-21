import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If accessing root path, redirect to /casadelmare
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/casadelmare', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
