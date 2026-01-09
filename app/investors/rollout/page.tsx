export default function InvestorRollout() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Rollout
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Rollout Strategy
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          Signature Vending scales through a placement-first model: premium locations secured before
          deployment, simple operations, and portfolio-driven expansion.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* Visual placements */}
      <section className="grid gap-10 md:grid-cols-2 mb-24">
        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
          <img
            src="/Lobbypic.png"
            alt="Signature Vending in a boutique hotel lobby"
            className="w-full h-[22rem] object-cover"
          />

          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-2">
              Hospitality
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Boutique hotels and premium lobbies where discreet, design-led convenience adds guest value
              and generates incremental revenue.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
          <img
            src="/SpaPic.png"
            alt="Signature Vending in a premium leisure and spa environment"
            className="w-full h-[22rem] object-contain bg-[#2a140c]"
          />

          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-2">
              Leisure & Wellness
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Gyms, spas and wellness centres where curated essentials and healthy products fit daily use.
            </p>
          </div>
        </div>
      </section>

      {/* Placement logic */}
      <section className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Placement-First Model
        </h2>

        <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
          <li>• Machines are only purchased once a confirmed placement is secured.</li>
          <li>• Focus on environments where traditional vending is rejected on aesthetics and quality.</li>
          <li>• Product mix is curated by venue type to maximise relevance and spend.</li>
          <li>• Single placements are converted into multi-site portfolio discussions.</li>
        </ul>
      </section>

      {/* Timeline strip */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10">

          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-8 text-center">
            Rollout Timeline
          </p>

          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">0–30 Days</p>
              <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Foundation</p>
              <p className="text-sm text-[#e6cfa3] leading-relaxed">
                Secure first placements, deploy initial machines, and standardise operations.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">30–90 Days</p>
              <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Replication</p>
              <p className="text-sm text-[#e6cfa3] leading-relaxed">
                Expand across comparable sites, refine product mix, and formalise service cadence.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">3–12 Months</p>
              <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Acceleration</p>
              <p className="text-sm text-[#e6cfa3] leading-relaxed">
                Multi-site rollouts, supplier leverage, and growing machine density.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">12+ Months</p>
              <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Portfolio Phase</p>
              <p className="text-sm text-[#e6cfa3] leading-relaxed">
                Optimised routes, predictable cash flow, and portfolio-level management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Phased Growth to 100 Machines
        </h2>

        <div className="space-y-10">
          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 1 — Proof (1–12 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Establish early placements, validate performance, and finalise the operating template
              across stock mix, servicing, and site management.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 2 — Replication (12–50 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Expand through multi-site operators and portfolios. Growth becomes distribution,
              not reinvention.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 3 — Portfolio (50–100 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Optimise operations through structured routes, improved supplier terms, and
              data-driven stock control to produce predictable monthly cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Operating Model
        </h2>

        <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
          <li>• Real-time performance data informs stock and replenishment timing.</li>
          <li>• Service visits are triggered by sell-through rather than fixed schedules.</li>
          <li>• Venue-specific curation improves relevance and margin.</li>
          <li>• Route density improves unit economics as the portfolio scales.</li>
        </ul>
      </section>

      {/* Navigation */}
      <section className="text-center mt-24 pt-12 border-t border-[#6b4a2d]/40">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a
            href="/investors"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            ← Investor Overview
          </a>
          <a
            href="/investors/vision"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            Vision & Strategy →
          </a>
        </div>
      </section>
    </main>
  );
}
