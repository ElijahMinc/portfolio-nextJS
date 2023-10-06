import nodemailer from 'nodemailer';

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST! as any,
      port: process.env.NEXT_SMTP_PORT! as any,
      secure: false,
      auth: {
        user: process.env.NEXT_SMTP_USER!,
        pass: process.env.NEXT_SMTP_PASSWORD!,
      },
    });
  }

  async sendMessage(data: { email: string; name: string; message: string }) {
    if (!this.transporter) return;

    const { message, name, email } = data;
    try {
      await this.transporter.sendMail({
        from: email,
        to: process.env.NEXT_SMTP_USER!,
        subject: `Повідомлення від:  Name: ${name};`,
        // text: message,
        html: `
					<div>
						<h1>Heeey! 🦄 There's a new message for you!</h1>
						</br>
						<h2>My Email: ${email} </h2>
						</br>
						<p>${message}</p>
					</div>
				`,
      });
    } catch (error) {
      console.error('Error sending email', error);
    }
  }
}

const mailService = new MailService();

export default mailService;
