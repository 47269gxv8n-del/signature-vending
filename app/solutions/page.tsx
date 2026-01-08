export default function Solutions() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-14">
        Our Solutions
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        <div className="border border-[#6b4a2d] rounded-2xl p-10">
          <h3 className="text-xl mb-4">Corporate Offices</h3>
          <p className="text-[#e6cfa3]">
            Premium vending solutions designed to enhance modern workplaces,
            supporting productivity, wellbeing, and culture.
          </p>
        </div>

        <div className="border border-[#6b4a2d] rounded-2xl p-10">
          <h3 className="text-xl mb-4">Hospitality & Leisure</h3>
          <p className="text-[#e6cfa3]">
            Discreet, design-led machines that complement hotels, gyms,
            lounges, and exclusive venues.
          </p>
        </div>

        <div className="border border-[#6b4a2d] rounded-2xl p-10">
          <h3 className="text-xl mb-4">Bespoke Installations</h3>
          <p className="text-[#e6cfa3]">
            Fully tailored solutions — from machine finishes to curated
            product selections aligned with your brand.
          </p>
     

        </div>

      </div>
      {/* Soft CTA */}
      
<section className="mt-32 mb-24 text-center max-w-3xl mx-auto px-4">
  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-[#f5e6c8]">
    Begin a Conversation
  </h2>

  <p className="text-lg text-[#e6cfa3] leading-relaxed mb-6">
    Whether you are exploring premium vending for a hotel, workplace, or private environment,
    our concierge team would be delighted to speak with you.
  </p>

  <p className="text-lg text-[#e6cfa3] leading-relaxed mb-10">
    To discuss placements, partnerships, or private installations, please contact us below.
  </p>

  <div className="flex flex-col items-center gap-6">
    <a
      href="/contact"
      className="inline-block px-10 py-4 border border-[#d6b97a] text-sm uppercase tracking-[0.35em] text-[#f5e6c8]
                 hover:bg-[#d6b97a] hover:text-[#2a140c] transition-all duration-300"
    >
      Contact Concierge
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
