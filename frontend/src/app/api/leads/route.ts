import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const body = text ? JSON.parse(text) : {};

    // Validate essential fields
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name, email, and phone number.' },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, serviceInterest, budgetRange, message } = body;

    // Optional: If WEB3FORMS_ACCESS_KEY or other email provider key is configured in .env
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Lead: ${fullName} - ${serviceInterest || 'MOM Inquiry'}`,
            from_name: 'Moments of Marketing Portal',
            name: fullName,
            email: email,
            phone: phone,
            company: company || 'N/A',
            service: serviceInterest || 'General',
            budget: budgetRange || 'N/A',
            message: message || 'N/A',
          }),
        });
      } catch (err) {
        console.error('Email dispatch error (non-blocking):', err);
      }
    }

    // Format instant WhatsApp message URL
    const waText = [
      `*New Inquiry - Moments of Marketing* 🚀`,
      ``,
      `*Name:* ${fullName}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      company ? `*Company:* ${company}` : null,
      serviceInterest ? `*Service:* ${serviceInterest}` : null,
      budgetRange ? `*Budget:* ${budgetRange}` : null,
      message ? `*Message:* ${message}` : null,
      ``,
      `_Sent via Moments of Marketing Website_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/917000083119?text=${encodeURIComponent(waText)}`;

    // Format mailto fallback URL
    const mailtoSubject = encodeURIComponent(`New Inquiry from ${fullName} - ${serviceInterest || 'MOM'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${serviceInterest || 'N/A'}\nBudget: ${budgetRange || 'N/A'}\n\nMessage:\n${message || 'N/A'}`
    );
    const mailtoUrl = `mailto:Contact@momentsofmarketing.in?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry registered! Connecting you to WhatsApp & Email...',
        data: {
          leadId: `mom-${Date.now()}`,
          fullName,
          whatsappUrl,
          mailtoUrl,
          sentAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
