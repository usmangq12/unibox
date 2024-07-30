import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { serialize } from "cookie";

export async function GET(request: Request) {
  // Invalidate the auth cookie
  const response = NextResponse.redirect(new URL("/login", request.url));
    response.headers.set(
      "Set-Cookie",
      serialize("auth", "false", { path: "/", httpOnly: true, secure: true })
    );
    return response;
}
