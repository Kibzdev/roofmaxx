import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Data', req.body)

  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, phone,serviceName, message } = req.body

  const messageData = {
    from: 'Contact Form <info@kvuliagency.com>',
    to: 'sales@kvuliagency.com',
    subject: 'New Client Enquiry',
    text: `Hello,

    You have a new form entry from: ${name} ${email} ${phone} ${serviceName}.

    ${message}
    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch (err: any) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}