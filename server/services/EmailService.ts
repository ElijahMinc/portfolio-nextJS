import nodemailer from 'nodemailer';

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.NEXT_SMTP_HOST,
      // port: process.env.NEXT_SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.NEXT_SMTP_USER,
        pass: process.env.NEXT_SMTP_PASSWORD,
      },
    });
  }

  async sendMessage(data: any) {
    if (!this.transporter) return;

    const { message, name, email } = data;

    try {
      await this.transporter.sendMail({
        from: email,
        to: process.env.NEXT_SMTP_USER,
        subject: `<h1>Message from ${name} </h1>`,
        html: `
             <div>
                <h1>Heeey! 🦄</h1>
                </br>

                <h2>Sender's e-mail: ${email} </h2>
                </br>

                <div> 
                  <h2>
                    Sender's message:
                  </h2>
                  <p>
                    ${message}
                  </p>
                </div>
               
             </div>
          `,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

const mailService = new MailService();

export { mailService };
