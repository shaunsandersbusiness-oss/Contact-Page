export default function Calendar() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 max-w-[400px] mx-auto px-5 reveal">
        <span className="flex-1 h-[1px] bg-[#1a1a1a]"></span>
        <span className="text-[14px] text-[#666] font-sans uppercase tracking-[2px]">or</span>
        <span className="flex-1 h-[1px] bg-[#1a1a1a]"></span>
      </div>

      <section className="py-[60px] pb-[80px] relative z-10" id="bookCall">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-[28px] font-bold text-white text-center mb-2 font-sans reveal">Book a Call</h2>
          <p className="text-[15px] text-[#999] text-center mb-8 font-sans reveal">45 minutes with Shaun Sanders — pick a time that works for you</p>
          
          <div className="bg-[#0a0a0a] border border-[#c9a84c]/20 rounded-[12px] md:rounded-[16px] p-[12px] md:p-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(201,168,76,0.04)] overflow-hidden reveal">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/faLQXXYw2kFifLm95MyU" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
              className="min-h-[800px] md:min-h-[900px] rounded-lg"
              id="r8lRU3DiH3Wu1eY26HeJ_1772584809162"
              title="Book a Call"
            >
            </iframe>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3 mt-4 text-[13px] text-[#777] font-sans reveal">
            <span>🔒 Your information is private</span>
            <span className="hidden md:inline">·</span>
            <span>100% free, no obligation</span>
          </div>
        </div>
      </section>
    </>
  );
}
