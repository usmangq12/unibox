import  nodemailer  from 'nodemailer';

// app/api/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
// import { sendEmail } from '@/lib/utils';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS, 
  },
});


export async function POST(req: NextRequest) {
  console.log("POST");
  console.log(req);
  const body = await req.json(); // Parse the request body
  const {recipient,subject,emailContent} = body;
  console.log(recipient,subject,emailContent);
  if (req.method === 'POST') {
    console.log("Request", req.method);
    try {
     
      await transporter.sendMail({
        to: recipient,
        subject: subject,
        html: emailContent,
      });
      return NextResponse.json({ message: 'Success' });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
  } else {
    return new NextResponse(null, { status: 405, statusText: 'Method Not Allowed' });
  }
}

export async function GET(req: NextRequest) {
  return new NextResponse(null, { status: 405, statusText: 'Method Not Allowed' });
}
