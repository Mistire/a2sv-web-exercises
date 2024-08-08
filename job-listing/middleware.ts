import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value

  const protectedRoutes = ['/'];

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token) {
      const signUpUrl = new URL('/auth/signup', request.url)
      return NextResponse.redirect(signUpUrl)
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/']
}