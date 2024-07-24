import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/authOptions";

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
