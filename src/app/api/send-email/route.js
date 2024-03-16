import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  return await handler(request);
}

export async function handler(req) {
  const request = await req.json();
  const { name, email, message } = request;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM, //not working
      to: process.env.EMAIL_TO,
      subject: `Contact Form Submission from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    if (info.accepted) {
      return NextResponse.json({
        status: 200,
        message: "Email sent successfully!",
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Error",
        body: info.response,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error sending email",
      body: error,
    });
  }
}
