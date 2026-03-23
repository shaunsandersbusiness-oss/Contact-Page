export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-center py-[48px] px-[24px] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <img 
          src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
          alt="Regalis Realty Media" 
          className="max-w-[180px] mb-3"
          referrerPolicy="no-referrer"
        />
        <p className="text-[14px] text-[#c9a84c] mb-2 font-sans">Regalis Realty Media</p>
        <p className="text-[13px] text-[#999] mb-2">
          <a href="mailto:contact@regalisrealtymedia.com" className="hover:text-[#c9a84c] transition-colors duration-200">contact@regalisrealtymedia.com</a>
          {' · '}
          <a href="tel:9176838034" className="hover:text-[#c9a84c] transition-colors duration-200">(917) 683-8034</a>
        </p>
        <p className="text-[12px] text-[#666]">All rights reserved 2025</p>
      </div>
    </footer>
  );
}
