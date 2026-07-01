export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-center py-16 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-[14px] text-[#999] font-sans font-medium">
          © 2026 Regalis Realty Media
        </p>
        <div className="flex items-center gap-6 text-[14px] font-sans font-medium">
          <a href="https://termsandconditions.regalisrealtymedia.com/" className="text-[#c9a84c] hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <a href="https://privacypolicy.regalisrealtymedia.com/" className="text-[#c9a84c] hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
