
export default function Header() {
  return (
    <header className="flex flex-col items-center pt-10 pb-14 border-b border-[#6b4a2d]/40">

      {/* Logo */}
      <img
        src="/signature-vendinglogo.png"
        alt="Signature Vending"
        className="h-36 md:h-40 w-auto mb-12"
      />

      {/* Navigation */}
      <nav className="flex gap-12 text-base uppercase tracking-[0.35em] text-[#e6cfa3]">
        <a
          href="/"
          className="hover:text-[#f5e6c8] transition-all duration-300 hover:tracking-[0.4em]"
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:text-[#f5e6c8] transition-all duration-300 hover:tracking-[0.4em]"
        >
          About
        </a>
        <a
          href="/solutions"
          className="hover:text-[#f5e6c8] transition-all duration-300 hover:tracking-[0.4em]"
        >
          Solutions
        </a>
        <a
          href="/contact"
          className="hover:text-[#f5e6c8] transition-all duration-300 hover:tracking-[0.4em]"
        >
          Contact
        </a>
      </nav>

    </header>
  );
}
