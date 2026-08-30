import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, service, budget, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "SKSyntax Website <onboarding@resend.dev>",
      to: ["sksyntaxofficial@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry — ${service}`,
      text: `
New project inquiry from SKSyntax website

Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget || "Not specified"}

Project Details:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}