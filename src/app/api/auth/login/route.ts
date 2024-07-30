import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { serialize } from "cookie";

export async function GET(request: Request) {
  // Get the auth cookie
  const cookieStore = cookies();
  const authCookie = cookieStore.get("auth");
  if (authCookie?.value === "false") {
    console.log("authCookie.value** ", authCookie.value);

    const response = NextResponse.redirect(new URL("/login", request.url));
    response.headers.set(
      "Set-Cookie",
      serialize("auth", "false", { path: "/login", httpOnly: true, secure: true })
    );
    return response;
  } else {
    console.log("no authCookie.value** ");
    return NextResponse.json({ auth: "not set" });
  }
}
