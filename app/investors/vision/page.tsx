export default function InvestorVision() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">

      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Vision & Rollout
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Scaling Signature Vending
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          Signature Vending scales through repeatable placements in premium environments.
          This page outlines the market, placement strategy, and the rollout path to 100 machines.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* Market */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          The Market
        </h2>

        <p className="text-lg text-[#e6cfa3] leading-relaxed mb-6">
          The target market is not “vending” in the traditional sense. It is convenience retail
          positioned inside hospitality and workplace environments where brand and experience matter.
        </p>

        <p className="text-lg text-[#e6cfa3] leading-relaxed">
          Hotels, offices, gyms, serviced apartments, and premium residential developments all share
          the same demand: high-quality essentials available immediately, without staffing overhead.
        </p>
      </section>

      {/* Placements */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Placement Strategy
        </h2>

        <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
          <li>• Focus on premium locations where traditional vending is rejected on aesthetics.</li>
          <li>• Curate product mix to match environment: essentials, wellness, and premium snacks.</li>
          <li>• Use performance data to refine stock, pricing, and replenishment cadence.</li>
          <li>• Convert single wins into multi-site rollouts across portfolios.</li>
        </ul>
      </section>

      {/* Rollout */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Rollout to 100 Machines
        </h2>

        <div className="space-y-10">
          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 1 — Proof
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Establish early placements, validate performance, and standardise operations.
              The objective is repeatability: one machine that works becomes the template.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 2 — Replication
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Expand through operators with multiple sites. Repeat placements across hotel groups,
              office portfolios, and premium developments. Scale becomes distribution, not invention.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 3 — Portfolio
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              At scale, the fleet becomes a portfolio business: tighter replenishment routes,
              improved supplier terms, and predictable monthly cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="text-center mt-24 pt-12 border-t border-[#6b4a2d]/40">
        <a
          href="/investors"
          className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
        >
          ← Back to Investor Overview
        </a>
      </section>
      <a
  href="/investors/rollout"
  className="inline-block px-10 py-4 border border-[#6b4a2d] text-sm uppercase tracking-[0.35em] text-[#d6b97a]
             hover:bg-[#6b4a2d] hover:text-[#f5e6c8] transition-all duration-300"
>
  View Rollout
</a>


    </main>
  );
}
