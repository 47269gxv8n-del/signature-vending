export default function InvestorRollout() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">

      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Rollout
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Rollout to 100 Machines
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          The rollout strategy is designed to be repeatable and operationally simple:
          secure premium placements, deploy machines only against confirmed locations,
          then scale through portfolios and multi-site operators.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* Visuals */}
      <section className="grid gap-10 md:grid-cols-2 mb-20">
        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
          <img
  src="/Lobbypic.png"
  alt="Signature Vending in a boutique hotel lobby"
  className="w-full h-[22rem] object-cover"
/>

          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-2">Hospitality</p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Boutique lobbies and premium hotels — discreet, design-led convenience with revenue share.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
          <img
  src="/SpaPic.png"
  alt="Signature Vending in a premium leisure and spa environment"
  className="w-full h-[22rem] object-cover"
/>

          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-2">Leisure & Wellness</p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Leisure centres, gyms and wellness clubs — healthy convenience with minimal operational burden.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="mb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Phased Growth
        </h2>
        {/* Timeline Strip */}
<section className="mb-16 max-w-5xl mx-auto">
  <div className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10">

    <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-8 text-center">
      Rollout Timeline
    </p>

    <div className="grid gap-6 md:grid-cols-4">
      
      {/* Step 1 */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">0–30 Days</p>
        <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Foundation</p>
        <p className="text-sm text-[#e6cfa3] leading-relaxed">
          Secure first placements, deploy initial machines, and standardise operations.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">30–90 Days</p>
        <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Replication</p>
        <p className="text-sm text-[#e6cfa3] leading-relaxed">
          Expand across comparable sites, refine product mix, and formalise service cadence.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">3–12 Months</p>
        <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Acceleration</p>
        <p className="text-sm text-[#e6cfa3] leading-relaxed">
          Multi-site rollouts, supplier leverage, and growing machine density.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">12+ Months</p>
        <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Portfolio Phase</p>
        <p className="text-sm text-[#e6cfa3] leading-relaxed">
          Optimised routes, predictable cash flow, and portfolio-level management.
        </p>
      </div>
    </div>

    {/* Line + markers */}
    <div className="hidden md:block mt-10">
      <div className="relative h-px bg-[#6b4a2d]/60 mx-6">
        <span className="absolute -top-[6px] left-[0%] h-3 w-3 rounded-full bg-[#d6b97a]"></span>
        <span className="absolute -top-[6px] left-[33%] h-3 w-3 rounded-full bg-[#d6b97a]"></span>
        <span className="absolute -top-[6px] left-[66%] h-3 w-3 rounded-full bg-[#d6b97a]"></span>
        <span className="absolute -top-[6px] left-[100%] h-3 w-3 rounded-full bg-[#d6b97a] -translate-x-full"></span>
      </div>
    </div>

  </div>
</section>


        <div className="space-y-10">
          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 1 — Proof (1–12 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Secure early placements in premium environments, validate performance, and standardise replenishment,
              product mix, and service cadence. Create the operating template.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 2 — Replication (12–50 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Expand through multi-site operators and portfolios: hotel groups, office providers, gyms and premium
              residential developments. Scale becomes distribution, not reinvention.
            </p>
          </div>

          <div className="rounded-2xl p-10 border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                          shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Phase 3 — Portfolio (50–100 machines)
            </p>
            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Optimise operations: structured replenishment routes, improved supplier terms, tighter data-driven
              stock control, and predictable monthly cash flow across a diversified placement mix.
            </p>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Operating Model
        </h2>

        <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
          <li>• Real-time data identifies best sellers and replenishment timing.</li>
          <li>• Stock is refreshed precisely when needed, reducing wasted visits.</li>
          <li>• Premium curation by venue type — hotel essentials, wellness mixes, quality snacks.</li>
          <li>• Machines are deployed only against confirmed placements.</li>
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
