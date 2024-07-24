import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: { params: { scope: "openid profile email" } },
    }),
  ],
 
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/', // Redirect to login page
    error: '/auth/error', // Error page
  },
  callbacks: {
    
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        console.log("Google user signed in:", user);
        return true;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
    async session({ session, user }) {
      return session;
    },
  },
  
};
