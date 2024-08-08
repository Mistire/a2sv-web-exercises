import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // console.log('Middleware Token:', token); 

  if (!token) {
    
    return NextResponse.redirect(new URL('/auth/signup', request.url));
  }

  
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], 
};
