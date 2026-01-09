export default function InvestorVision() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Vision & Strategy
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Where This Goes
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          Signature Vending is not building “vending machines” — it’s building a premium convenience layer
          for hospitality and wellness environments where experience matters.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* Vision + Positioning */}
      <section className="mb-20 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10 md:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
            The Vision
          </p>

          <p className="text-xl md:text-2xl text-[#f5e6c8] leading-relaxed text-center font-light">
            A design-led unattended retail network that premium venues are proud to host —
            curated essentials, cashless experience, and predictable operations.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="rounded-2xl border border-[#6b4a2d]/50 bg-[#2a140c]/40 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Category</p>
              <p className="text-base text-[#e6cfa3] leading-relaxed">
                Premium convenience retail, embedded inside trusted environments.
              </p>
            </div>

            <div className="rounded-2xl border border-[#6b4a2d]/50 bg-[#2a140c]/40 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Customer</p>
              <p className="text-base text-[#e6cfa3] leading-relaxed">
                Guests, members and staff who want essentials instantly — without friction.
              </p>
            </div>

            <div className="rounded-2xl border border-[#6b4a2d]/50 bg-[#2a140c]/40 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Venue Value</p>
              <p className="text-base text-[#e6cfa3] leading-relaxed">
                Incremental revenue and service uplift without staff overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="mb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Why Now
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Consumer shift
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Cashless self-serve is now normal — expectations are higher, and “cheap vending” no longer fits
              premium environments.
            </p>
          </div>

          <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Venue economics
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Venues want frictionless guest convenience without staffing, shrink risk, or operational complexity —
              particularly at night, between peaks, and in smaller sites.
            </p>
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className="mb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Strategic Advantage
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-3">Design + trust</p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              A premium brand standard that wins placements where generic vending is rejected.
            </p>
          </div>

          <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-3">Curated mix</p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Higher basket value and pricing power from curated essentials and wellness products.
            </p>
          </div>

          <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-3">Operating playbook</p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Standardised service + data-driven replenishment improves efficiency as the fleet grows.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge to Financials */}
      <section className="mb-20 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-3">
            Next
          </p>
          <p className="text-lg text-[#e6cfa3] leading-relaxed">
            The Financials section details unit economics, assumptions, portfolio projections, and dividend approach.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="text-center mt-24 pt-12 border-t border-[#6b4a2d]/40">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a
            href="/investors/rollout"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            ← Rollout
          </a>
          <a
            href="/investors/financials"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            Financials →
          </a>
        </div>
      </section>
    </main>
  );
}
