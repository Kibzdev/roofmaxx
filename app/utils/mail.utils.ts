import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport  = nodemailer.createTransport({
  host:process.env.MAIL_HOST,
  port:process.env.MAIL_PORT,
  secure:process.env.NODE_ENV !== 'development',
  auth: {
    user:process.env.MAIL_USER,
    pass:process.env.MAIL_PASSWORD
  },

} as SMTPTransport.Options)

type SendEmailto = {
  sender: Mail.Address,
  recepients: Mail.Address[],
  subject: string;
  message: string;
}

export const sendEmail =async (dto: SendEmailto) => {
  const {sender, recepients, subject, message} = dto;
  return await transport.sendMail({
    from:sender,
    to:recepients,
    subject,
    html:message,
    text: message

  })

}