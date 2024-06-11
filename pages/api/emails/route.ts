import { sendEmail } from '@/app/utils/mail.utils'

export async function POST() {
  const sender = {
    name: 'Roofmax',
    address:'no-reply@roofmax.co.ke',
  }

  const recepients = [{
    name: 'John Doe',
    address: 'John.doe@roofmax.co.ke'
  }]

  try {
    const result = await sendEmail({
      sender,
      recepients,
      subject: 'welcome to our website',
      message: 'You are welcome ro roofmax'
    })

    return Response.json({
      accepted: result.accepted
    })
  } catch (error) {
    return Response.json({
      message: "unable to send email"
    }, {
      status:500
    })
  }
}