import { NextResponse } from 'next/server'

export function middleware(request: any) {
  // Allow /admin route to pass through
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }
  // Other middleware logic
  return NextResponse.next();
}