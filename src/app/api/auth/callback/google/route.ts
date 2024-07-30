import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  if (!code) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.headers.set(
      "Set-Cookie",
      serialize("auth", "false", { path: "/login", httpOnly: true, secure: true })
    );
    return response;
  }

  try {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.headers.set(
      "Set-Cookie",
      serialize("auth", "true", { path: "/", httpOnly: true, secure: true })
    );
    return response;
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json(
      { message: "An error occurred during authentication" },
      { status: 500 }
    );
  }
}
