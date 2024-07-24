"use client";
import Image from "next/image";
import React from "react";
import GmailSvg from "../../public/gmail.svg";
import OutlookSvg from "../../public/outlook.svg"
import { signIn } from "next-auth/react";

const LoginComponent = () => {
  const handleLoginWithGmail = () => {
     console.log("Login",signIn);
    signIn("google", { callbackUrl: "/" });
    // async function initiateOAuthFlow() {
    //   const codeVerifier = generateCodeVerifier();
    //   const codeChallenge = await generateCodeChallenge(codeVerifier);
    //   console.log("CodeVerifier", codeChallenge);
    //   // Store the codeVerifier in localStorage to use it later in the callback
    //   if (typeof window !== "undefined") {
    //     localStorage.setItem("codeVerifier", codeVerifier);
    //     console.log("CodeChallenge", process.env.GOOGLE_CLIENT_ID);
    //     const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback/google&scope=openid%20email%20profile&state=randomState&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    //     window.location.href = authorizationUrl;
    //   }
    // }

    // initiateOAuthFlow();
  };

  const handleLoginWithOutlook = () => {
    signIn("azure-ad", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="w-full h-screen flex gap-3 bg-white">
      <div className="bg-blue-600 h-full p-12 flex justify-center items-center flex-col">
        <p className="text-white font-bold text-5xl mb-3">The Super App for</p>
        <p className="text-white font-bold text-5xl">SuperHuman</p>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col">
        <h4 className="text-blue-600 font-bold text-2xl mb-7">Login</h4>
        <button
          onClick={handleLoginWithGmail}
          className="p-2 px-6 text-white mb-2 bg-white border border-black rounded-2xl flex justify-center items-center gap-4"
        >
          <Image
            src={GmailSvg}
            alt="Gmail Logo"
            width={34}
            height={34}
            priority
          />
          <p className="text-black font-bold">Login with Gmail</p>
        </button>
        <button
          onClick={handleLoginWithOutlook}
          className="p-2 px-6 text-white mb-2 bg-white border border-black rounded-2xl flex justify-center items-center gap-4"
        >
          <Image
            src={OutlookSvg}
            alt="Outlook Logo"
            width={34}
            height={34}
            priority
          />
          <p className="text-black font-bold">Login with Outlook</p>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
