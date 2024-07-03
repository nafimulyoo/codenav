// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './firebase';

export async function middleware(request: NextRequest) {
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/learn/:path*', '/jobs/:path*', '/competitions/:path*', '/profile/:path*', 
    // '/search/:path*'
  ],
}

