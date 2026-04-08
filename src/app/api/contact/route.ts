import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure nodemailer transporter using environment variables
        // Make sure to add these to your .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // Note: Use App Passwords for Gmail
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL || 'joseph.awer@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; color: #333;">
                    <h2 style="color: #0070f3;">New Message via Portfolio</h2>
                    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                    <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #0070f3; background-color: #f9f9f9;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            `,
        };

        // If no credentials, simulate success (development safety)
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn('SMTP credentials missing (.env.local). Simulated email send:');
            console.warn(mailOptions);
            return NextResponse.json({ success: true, simulated: true });
        }

        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
