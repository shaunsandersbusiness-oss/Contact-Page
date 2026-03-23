import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      source: 'Regalis Contact Page',
      timestamp: new Date().toISOString()
    };

    try {
      // REPLACE THIS URL WITH YOUR GHL WEBHOOK URL
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/rGpgHpWBRjXP8J0gVxZS/webhook-trigger/3be7786d-3fec-4f02-a43c-e3c6e6cccde4';
      
      // If the webhook URL is not set, we'll simulate a successful submission for the demo
      if (webhookUrl === 'YOUR_GHL_WEBHOOK_URL') {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Webhook failed');
      }
    } catch (error) {
      alert('Something went wrong. Please email us directly at contact@regalisrealtymedia.com or call (917) 683-8034.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-[48px] md:py-[80px] relative z-10" id="contactForm">
      <div className="max-w-[640px] mx-auto px-5">
        <h2 className="text-[28px] font-bold text-white text-center mb-2 font-sans reveal">Send Us a Message</h2>
        <p className="text-[15px] text-[#999] text-center mb-8 font-sans reveal">We typically respond within a few hours</p>
        
        <div className="form-frame bg-[#0a0a0a] border border-[#1a1a1a] rounded-[16px] p-[24px] md:p-[32px] relative overflow-hidden reveal">
          {!isSuccess ? (
            <form id="ghlForm" onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" className="p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 placeholder:text-[#555]" required placeholder="Your first name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" className="p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 placeholder:text-[#555]" required placeholder="Your last name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" className="p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 placeholder:text-[#555]" required placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" className="p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 placeholder:text-[#555]" placeholder="(555) 555-5555" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="subject">What can we help with? *</label>
                <select id="subject" name="subject" className="form-select p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 appearance-none" required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="Book a Shoot">Book a Shoot</option>
                  <option value="Pricing Question">Pricing Question</option>
                  <option value="Agent Branding">Agent Branding / Growth Engine</option>
                  <option value="Existing Order">Question About an Existing Order</option>
                  <option value="Customer Portal Help">Customer Portal Help</option>
                  <option value="Partnership Inquiry">Partnership or Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[13px] font-medium text-[#D4D4D4] font-sans" htmlFor="message">Message *</label>
                <textarea id="message" name="message" className="p-[14px_16px] bg-[#111] border border-[#333] rounded-lg text-white text-[15px] font-sans transition-all duration-200 outline-none focus:border-[#c9a84c] focus:ring-3 focus:ring-[#c9a84c]/10 placeholder:text-[#555] resize-y min-h-[120px]" required placeholder="Tell us a bit about what you need..." rows={5}></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full p-[16px] bg-[#c9a84c] text-black text-[16px] font-bold rounded-lg font-sans transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mt-2 relative z-10"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          ) : (
            <div className="text-center p-[40px_20px] relative z-10">
              <span className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-[28px] font-bold mb-4">
                ✓
              </span>
              <h3 className="text-[22px] font-bold text-[#c9a84c] mb-2 font-sans">Message Sent!</h3>
              <p className="text-[15px] text-[#D4D4D4] leading-[1.6] mb-5 font-sans">
                We received your message and will get back to you within a few hours. If it's urgent, call or text us directly.
              </p>
              <a href="tel:9176838034" className="inline-block p-[12px_24px] border border-[#333] rounded-lg text-[#D4D4D4] text-[14px] font-semibold transition-all duration-200 font-sans hover:border-[#c9a84c]/40 hover:text-[#c9a84c]">
                Call Shaun: (917) 683-8034
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
