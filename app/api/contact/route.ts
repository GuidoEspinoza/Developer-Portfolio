import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type EmailPayload = {
    name: string;
    email: string;
    message: string;
};

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'hostinger',
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSKEY,
    },
});

// host: "smpt.hostinger.com",
//     port: 465,
//     secure: true,

// HTML email template
const generateEmailTemplate = (name: string, email: string, userMessage: string) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">Nuevo mensaje recibido</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Haga clic en Responder para responder al remitente.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload: EmailPayload, message: string) {
    const { name, email, message: userMessage } = payload;

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `Nuevo mensaje de ${name}`,
        text: message,
        html: generateEmailTemplate(name, email, userMessage),
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error al enviar el mensaje:', error.message);
        }
        return false;
    }
};

export async function POST(request: Request) {
    try {
        const payload: EmailPayload = await request.json();
        const { name, email, message: userMessage } = payload;

        const message = `Nuevo mensaje de ${name}\n\nEmail: ${email}\n\nMensaje:\n\n${userMessage}\n\n`;

        // Send email
        const emailSuccess = await sendEmail(payload, message);

        if (emailSuccess) {
            return NextResponse.json({
                success: true,
                message: '¡Mensaje enviado correctamente!',
            }, { status: 200 });
        }

        return NextResponse.json({
            success: false,
            message: 'Falló el envío del mensaje.',
        }, { status: 500 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error de servidor.';
        console.error('API Error:', errorMessage);
        return NextResponse.json({
            success: false,
            message: errorMessage,
        }, { status: 500 });
    }
}