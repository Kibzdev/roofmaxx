import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, town, serviceId, message } = await req.json();

    // Simulate saving the data to a database or sending an email
    console.log('Form submission data:', { name, email, phone, town, serviceId, message });

    // Simulate success response
    return NextResponse.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ message: 'Failed to submit the form.' }, { status: 500 });
  }
}
