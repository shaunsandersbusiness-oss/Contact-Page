export default function Hero() {
  return (
    <section className="pt-[150px] pb-10 md:pt-[180px] md:pb-16 px-4 relative z-10">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="text-[12px] text-[#c9a84c] uppercase tracking-[3px] font-semibold block mb-4 reveal">
          GET IN TOUCH
        </span>
        <h1 className="text-[40px] md:text-[52px] text-white font-bold leading-tight mb-6 reveal" style={{ transitionDelay: '100ms' }}>
          Let's Talk About Your Next Listing
        </h1>
        <p className="text-[18px] text-[#D4D4D4] max-w-[560px] mx-auto leading-[1.7] mb-10 reveal" style={{ transitionDelay: '200ms' }}>
          Whether you're ready to book a shoot, have a question about our services, or just want to learn more — we're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[740px] mx-auto reveal" style={{ transitionDelay: '300ms' }}>
          <a href="tel:9176838034" className="contact-card group flex md:flex-col items-center text-left md:text-center gap-4 md:gap-2 p-[18px_20px] md:p-[24px_16px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl no-underline transition-all duration-300 hover:border-[#c9a84c]/30 hover:-translate-y-0.5 relative overflow-hidden">
            <span className="text-[24px] md:text-[28px] relative z-10">📞</span>
            <div className="flex flex-col relative z-10">
              <strong className="text-[16px] font-semibold text-white font-sans">Call or Text</strong>
              <span className="text-[13px] text-[#999] font-sans">(917) 683-8034</span>
            </div>
          </a>
          
          <a href="mailto:contact@regalisrealtymedia.com" className="contact-card group flex md:flex-col items-center text-left md:text-center gap-4 md:gap-2 p-[18px_20px] md:p-[24px_16px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl no-underline transition-all duration-300 hover:border-[#c9a84c]/30 hover:-translate-y-0.5 relative overflow-hidden">
            <span className="text-[24px] md:text-[28px] relative z-10">✉️</span>
            <div className="flex flex-col relative z-10">
              <strong className="text-[16px] font-semibold text-white font-sans">Email</strong>
              <span className="text-[13px] text-[#999] font-sans truncate max-w-[200px] md:max-w-full">contact@regalisrealtymedia.com</span>
            </div>
          </a>
          
          <a href="#bookCall" className="contact-card group flex md:flex-col items-center text-left md:text-center gap-4 md:gap-2 p-[18px_20px] md:p-[24px_16px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl no-underline transition-all duration-300 hover:border-[#c9a84c]/30 hover:-translate-y-0.5 relative overflow-hidden">
            <span className="text-[24px] md:text-[28px] relative z-10">📅</span>
            <div className="flex flex-col relative z-10">
              <strong className="text-[16px] font-semibold text-white font-sans">Book a Call</strong>
              <span className="text-[13px] text-[#999] font-sans">Schedule below</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
