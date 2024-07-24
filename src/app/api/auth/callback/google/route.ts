import { NextResponse } from "next/server";

export async function GET(request: Request) {
  
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  if (!state || !code) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  try {
    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json(
      { message: "An error occurred during authentication" },
      { status: 500 }
    );
  }
}
