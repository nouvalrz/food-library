import { NextResponse } from "next/server";

const protectedRoutes = ['/foods'];
const publicOnlyRoutes = ['/login'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  const isPublicOnly = publicOnlyRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (isPublicOnly && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}