import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) return console.log("Error in otp service", error);
  else return console.log("otp server ready to send otp");
});

export const sendEmail = async (to, otp) => {
  try {
    await transporter.sendMail(
      {
        from: `${process.env.Email}`,
        to: to,
        subject: "Your One-Time Password",
        text: `Your OTP is: ${otp}\n\nIt expires in 5 minutes. Do not share it with anyone.`,
        html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto">
        <h2 style="color:#4F46E5">Your One-Time Password</h2>
        <p>Use the code below to log in. It expires in <strong>5 minutes</strong>.</p>
        <div style="font-size:2.5rem;font-weight:700;letter-spacing:0.3em;
                    background:#F3F4F6;border-radius:8px;padding:16px;
                    text-align:center;color:#111827">
          ${otp}
        </div>
        <p style="color:#6B7280;font-size:0.85rem;margin-top:16px">
          If you didn't request this, you can safely ignore this email.
        </p>
      </div>
    `,
      },
      console.log(`[Mailer] OTP sent to ${email}`),
    );
  } catch (error) {
    console.log("Error in sending email", error);
  }
};
