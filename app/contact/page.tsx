export default function Contact() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-[#f5e6c8]">
          Contact Concierge
        </h1>

        <p className="text-lg md:text-xl text-[#e6cfa3] leading-relaxed max-w-3xl mx-auto">
          Signature Vending works with a select group of hospitality, workplace, and private
          environment partners. If you’re considering a placement, partnership, or private
          installation, our concierge team would be delighted to speak with you.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-10"></div>
      </section>

      {/* Concierge Options */}
      <section className="grid gap-10 md:grid-cols-2 mb-16">
        <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-xl mb-4 tracking-wide text-[#f5e6c8]">
            Placements
          </h2>
          <p className="text-[#e6cfa3] leading-relaxed mb-6">
            For hotels, offices, gyms, residential buildings, and premium venues seeking
            refined, unattended convenience.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d6b97a]">
            Typical response: same day
          </p>
        </div>

        <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-xl mb-4 tracking-wide text-[#f5e6c8]">
            Partnerships
          </h2>
          <p className="text-[#e6cfa3] leading-relaxed mb-6">
            For multi-site operators, hotel groups, and organisations looking to deploy across
            a portfolio with revenue share options.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d6b97a]">
            Available for brief calls
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-lg text-[#e6cfa3] mb-10 max-w-3xl mx-auto leading-relaxed">
          Please email our concierge team with your location type and postcode (or city),
          and we’ll reply with next steps and a suggested product mix.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:concierge@signature-vending.com"
            className="inline-block px-10 py-4 border border-[#d6b97a] text-sm uppercase tracking-[0.35em] text-[#f5e6c8]
                       hover:bg-[#d6b97a] hover:text-[#2a140c] transition-all duration-300"
          >
            Email Concierge
          </a>

          <a
            href="mailto:concierge@signature-vending.com"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            concierge@signature-vending.com
          </a>
        </div>
      </section>

      {/* Footer Accent */}
      <section className="mt-24 pt-12 border-t border-[#6b4a2d]/40 text-center">
        <p className="text-xs tracking-widest text-[#8f6b4a]">
          © {new Date().getFullYear()} Signature Vending — Premium Convenience
        </p>
      </section>
    </main>
  );
}
