export default function Solutions() {
  return (
    <main className="px-8 py-24 max-w-7xl mx-auto">

      <h1 className="text-4xl font-light tracking-wide mb-20 text-[#f5e6c8] text-center">
        Our Solutions
      </h1>

      <div className="grid gap-12 md:grid-cols-3">

        <div className="rounded-2xl p-10 border border-[#6b4a2d]
                        bg-gradient-to-b from-[#3a1f14] to-[#2a140c]">
          <h3 className="text-xl mb-4 text-[#f5e6c8]">
            Corporate Offices
          </h3>
          <p className="text-[#e6cfa3]">
            Premium snacks and beverages designed to support productivity,
            wellbeing, and workplace culture.
          </p>
        </div>

        <div className="rounded-2xl p-10 border border-[#6b4a2d]
                        bg-gradient-to-b from-[#3a1f14] to-[#2a140c]">
          <h3 className="text-xl mb-4 text-[#f5e6c8]">
            Hospitality & Leisure
          </h3>
          <p className="text-[#e6cfa3]">
            Discreet, design-conscious vending solutions for hotels, gyms,
            lounges, and premium venues.
          </p>
        </div>

        <div className="rounded-2xl p-10 border border-[#6b4a2d]
                        bg-gradient-to-b from-[#3a1f14] to-[#2a140c]">
          <h3 className="text-xl mb-4 text-[#f5e6c8]">
            Bespoke Installations
          </h3>
          <p className="text-[#e6cfa3]">
            Fully customised machines, finishes, and product selections
            aligned to your brand and environment.
          </p>
        </div>

      </div>
      {/* Soft CTA */}
      <section className="mt-32 mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
          Designed for Premium Spaces
        </h2>

        <p className="text-lg text-[#e6cfa3] mb-10">
          Discover how Signature Vending can elevate your workplace,
          hospitality venue, or private environment.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 border border-[#d6b97a] text-sm uppercase tracking-[0.35em] text-[#f5e6c8]
                     hover:bg-[#d6b97a] hover:text-[#2a140c] transition-all duration-300"
        >
          Enquire
        </a>
      </section>

      {/* Footer Accent */}
      <section className="mt-32 pt-12 border-t border-[#6b4a2d]/40 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
          Signature Vending
        </p>

        <p className="text-xs tracking-widest text-[#8f6b4a]">
          © {new Date().getFullYear()} Premium Convenience
        </p>
      </section>


    </main>
  );
}
