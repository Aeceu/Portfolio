import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name, email, message } = await req.json();

    let mailOptions = {
      from: email,
      to: process.env.AUTH_EMAIL,
      subject: `Contact Form Submission from ${email}`,
      text: message,
    };
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
};
