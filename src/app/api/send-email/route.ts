// pages/api/sendEmail.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { recipient, subject, emailContent } = await request.json();
  console.log("Req...", recipient, subject, emailContent);

  const resend = new Resend("re_5WN1as7L_wUbW7fcECts52LzXSqLJeHGc"); // Replace 'YOUR_API_KEY' with your actual API key

  try {
    const response = await resend.emails.send({
      from: "HR <hr@devnodes.co>", // Replace with your email
      to: "mubashershakeel1009@gmail.com", // Replace with your
      subject: subject,
      text: emailContent,
    });

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
