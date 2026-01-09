export default function Page() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Participate
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Participating in Signature Vending
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          Signature Vending is selectively engaging with private investors and strategic partners to fund
          deployment of its machine portfolio. Capital is deployed placement-first — machines are purchased
          only when a confirmed site is secured.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* The Ask */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
            The Ask
          </p>

          <p className="text-xl md:text-2xl text-[#f5e6c8] leading-relaxed font-light text-center">
            Private capital to accelerate the deployment of a premium, income-producing machine portfolio.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="rounded-2xl bg-[#2a140c]/45 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Typical cheque</p>
              <p className="text-2xl text-[#f5e6c8] font-light">£25k–£100k</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Range varies by round.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Deployment model</p>
              <p className="text-2xl text-[#f5e6c8] font-light">Placement-first</p>
              <p className="text-sm text-[#e6cfa3] mt-2">No idle machine spend.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Return profile</p>
              <p className="text-2xl text-[#f5e6c8] font-light">Cash-flow + growth</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Dividends as fleet matures.</p>
            </div>
          </div>

          <p className="text-center text-sm text-[#8f6b4a] mt-10 leading-relaxed">
            This page is private and indicative. Participation terms are agreed on a case-by-case basis.
          </p>
        </div>
      </section>

      {/* What capital funds */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          What Capital Funds
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Deployment-linked spend
            </p>

            <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
              <li>• Machine acquisition only against signed placements.</li>
              <li>• Initial stock float and replenishment cadence setup.</li>
              <li>• Spares, contingency, and service tooling for uptime.</li>
              <li>• Route buildout: storage, delivery cadence, operating systems.</li>
            </ul>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Why this matters
            </p>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              The model is designed to avoid wasted capital. Each deployment is treated as an income-producing
              asset placed only where the environment and footfall justify it.
            </p>

            <div className="h-px w-16 bg-[#6b4a2d]/70 my-8"></div>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              As the fleet grows, operating efficiency compounds through route density, improved supplier terms,
              and standardised servicing.
            </p>
          </div>
        </div>
      </section>

      {/* Example participation */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Example Participation (Illustrative)
        </h2>

        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
            Indicative example only
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Illustrative</p>
              <p className="text-2xl text-[#f5e6c8] font-light">£60,000</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Example investment.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Illustrative</p>
              <p className="text-2xl text-[#f5e6c8] font-light">10%</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Example equity.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Working policy</p>
              <p className="text-2xl text-[#f5e6c8] font-light">50/50 → 70/30</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Reinvest → distribute.</p>
            </div>
          </div>

          <p className="text-center text-lg text-[#e6cfa3] leading-relaxed mt-10">
            Investors participate pro-rata in distributions and long-term portfolio value. Dividend ratios are
            performance-led, with a planned shift toward higher distribution as the fleet matures.
          </p>

          <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
            Illustrative only — final terms vary by round and are agreed privately.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Process
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">Step 1</p>
            <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Intro</p>
            <p className="text-sm text-[#e6cfa3] leading-relaxed">
              Short call to align on fit, cheque size, and timeline.
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">Step 2</p>
            <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Access</p>
            <p className="text-sm text-[#e6cfa3] leading-relaxed">
              Share private pack, assumptions, and deployment pipeline.
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">Step 3</p>
            <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Terms</p>
            <p className="text-sm text-[#e6cfa3] leading-relaxed">
              Agree structure, reporting cadence, and dividend framework.
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-3">Step 4</p>
            <p className="text-lg text-[#f5e6c8] tracking-wide mb-2">Deploy</p>
            <p className="text-sm text-[#e6cfa3] leading-relaxed">
              Capital deployed alongside confirmed placements and rollout plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center mt-24 pt-12 border-t border-[#6b4a2d]/40">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-[#f5e6c8]">
          Private Discussions
        </h2>

        <p className="text-lg text-[#e6cfa3] leading-relaxed mb-10 max-w-3xl mx-auto">
          If you’d like to explore participation, request the private pack or discuss terms, get in touch below.
        </p>

        <a
          href="mailto:partners@signature-vending.com"
          className="inline-block px-10 py-4 border border-[#d6b97a] text-sm uppercase tracking-[0.35em] text-[#f5e6c8]
                     hover:bg-[#d6b97a] hover:text-[#2a140c] transition-all duration-300"
        >
          partners@signature-vending.com
        </a>

        <p className="mt-6 text-sm tracking-widest text-[#8f6b4a]">
          Private link — not listed on the main site.
        </p>
      </section>

      {/* Navigation */}
      <section className="text-center mt-20">
        <a
          href="/investors/financials"
          className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
        >
          ← Back to Financials
        </a>
      </section>
    </main>
  );
}
