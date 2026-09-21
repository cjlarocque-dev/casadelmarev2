import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Log for debugging
  console.log('Middleware pathname:', pathname);
  
  // Redirect root to /casadelmare
  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/casadelmare', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/', ''],
};
