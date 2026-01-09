export default function Page() {
  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Financials
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Financials & Returns Framework
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          Signature Vending is designed as a placement-first, cash-flow business. Machines are deployed
          only against confirmed sites, with unit economics built to generate consistent monthly profit.
        </p>

        <div className="h-px w-24 bg-[#6b4a2d] mx-auto mt-12"></div>
      </section>

      {/* Assumptions */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-8 text-center">
            Core Assumptions (Current Targets)
          </p>

          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
                Revenue / machine
              </p>
              <p className="text-xl text-[#f5e6c8] font-light">£700–£1,100</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Monthly range.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
                Product markup
              </p>
              <p className="text-xl text-[#f5e6c8] font-light">60%–100%</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Target range.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
                Net profit (base)
              </p>
              <p className="text-xl text-[#f5e6c8] font-light">£300 / month</p>
              <p className="text-sm text-[#e6cfa3] mt-2">£9/day net equivalent.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
                Net profit (upper)
              </p>
              <p className="text-xl text-[#f5e6c8] font-light">£500 / month</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Strong sites.</p>
            </div>
          </div>

          <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
            Targets shown are planning assumptions and will vary by site type, product mix, seasonality,
            and operating density.
          </p>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Unit Economics (Per Machine)
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Capital deployment
            </p>

            <ul className="space-y-3 text-lg text-[#e6cfa3] leading-relaxed">
              <li>
                • Typical machine cost:{" "}
                <span className="text-[#f5e6c8]">£4,000 (inc VAT)</span>
              </li>
              <li>
                • Initial stock: <span className="text-[#f5e6c8]">varies by site</span>
              </li>
              <li>• No purchase unless placement is confirmed.</li>
            </ul>

            <div className="h-px w-16 bg-[#6b4a2d]/70 my-8"></div>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              The model avoids idle outlay: machines are deployed only where there is a signed placement
              and a clear usage case.
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Monthly performance targets
            </p>

            <div className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
              <p>
                Revenue: <span className="text-[#f5e6c8]">£700–£1,100 / machine</span>
              </p>
              <p>
                Net profit:{" "}
                <span className="text-[#f5e6c8]">£300 (base)</span> /{" "}
                <span className="text-[#f5e6c8]">£500 (upper)</span>
              </p>
              <p>
                Base case framing: <span className="text-[#f5e6c8]">~£9/day net</span> equivalent.
              </p>
            </div>

            <div className="h-px w-16 bg-[#6b4a2d]/70 my-8"></div>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              At these targets, payback is typically expected within{" "}
              <span className="text-[#f5e6c8]">8–14 months</span>, before ongoing monthly cash generation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio scale table */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Portfolio Cash Flow (Illustrative)
        </h2>

        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
            Monthly Net Profit Range
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[#d6b97a] text-xs uppercase tracking-[0.35em]">
                  <th className="py-3 pr-6">Machines</th>
                  <th className="py-3 pr-6">Base case (£300)</th>
                  <th className="py-3 pr-6">Upper case (£500)</th>
                </tr>
              </thead>
              <tbody className="text-[#e6cfa3]">
                <tr className="border-t border-[#6b4a2d]/50">
                  <td className="py-4 pr-6 text-[#f5e6c8]">25</td>
                  <td className="py-4 pr-6">£7,500 / month</td>
                  <td className="py-4 pr-6">£12,500 / month</td>
                </tr>
                <tr className="border-t border-[#6b4a2d]/50">
                  <td className="py-4 pr-6 text-[#f5e6c8]">50</td>
                  <td className="py-4 pr-6">£15,000 / month</td>
                  <td className="py-4 pr-6">£25,000 / month</td>
                </tr>
                <tr className="border-t border-[#6b4a2d]/50">
                  <td className="py-4 pr-6 text-[#f5e6c8]">100</td>
                  <td className="py-4 pr-6">£30,000 / month</td>
                  <td className="py-4 pr-6">£50,000 / month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
            Illustrative only — portfolio outcomes vary by placement quality, product mix, and operational density.
          </p>
        </div>
      </section>

      {/* Sensitivity */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Sensitivity Snapshot
        </h2>

        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
            Monthly Net Profit Per Machine
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Downside case</p>
              <p className="text-xl text-[#f5e6c8] font-light">£200 / month</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Lower footfall, conservative mix.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Base case</p>
              <p className="text-xl text-[#f5e6c8] font-light">£300 / month</p>
              <p className="text-sm text-[#e6cfa3] mt-2">~£9/day net equivalent.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Upper case</p>
              <p className="text-xl text-[#f5e6c8] font-light">£500 / month</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Strong placement performance.</p>
            </div>
          </div>

          <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
            Illustrative only. Results depend on placement quality, uptime, service cadence, and product curation.
          </p>
        </div>
      </section>

      {/* Investor illustration */}
<section className="mb-24 max-w-5xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
    Illustrative Investor Participation
  </h2>

  <div
    className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
               shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
  >
    <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6 text-center">
      Example only — 10% equity holding
    </p>

    {/* BASE CASE */}
    <p className="text-lg text-[#e6cfa3] leading-relaxed text-center mb-6">
      <span className="text-[#f5e6c8]">Base case</span> assumes £300 net profit per machine/month and a build-phase policy of{" "}
      <span className="text-[#f5e6c8]">50% reinvestment / 50% distribution</span>.
    </p>

    <div className="overflow-x-auto mb-10">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#d6b97a] text-xs uppercase tracking-[0.35em]">
            <th className="py-3 pr-6">Machines</th>
            <th className="py-3 pr-6">Investor / month</th>
            <th className="py-3 pr-6">Investor / year</th>
          </tr>
        </thead>
        <tbody className="text-[#e6cfa3]">
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">25</td>
            <td className="py-4 pr-6">£375</td>
            <td className="py-4 pr-6">£4,500</td>
          </tr>
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">50</td>
            <td className="py-4 pr-6">£750</td>
            <td className="py-4 pr-6">£9,000</td>
          </tr>
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">100</td>
            <td className="py-4 pr-6">£1,500</td>
            <td className="py-4 pr-6">£18,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="h-px w-24 bg-[#6b4a2d]/70 mx-auto mb-10"></div>

    {/* UPPER CASE */}
    <p className="text-lg text-[#e6cfa3] leading-relaxed text-center mb-6">
      <span className="text-[#f5e6c8]">Upper case</span> assumes £500 net profit per machine/month under the same build-phase policy.
    </p>

    <div className="overflow-x-auto mb-10">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#d6b97a] text-xs uppercase tracking-[0.35em]">
            <th className="py-3 pr-6">Machines</th>
            <th className="py-3 pr-6">Investor / month</th>
            <th className="py-3 pr-6">Investor / year</th>
          </tr>
        </thead>
        <tbody className="text-[#e6cfa3]">
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">25</td>
            <td className="py-4 pr-6">£625</td>
            <td className="py-4 pr-6">£7,500</td>
          </tr>
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">50</td>
            <td className="py-4 pr-6">£1,250</td>
            <td className="py-4 pr-6">£15,000</td>
          </tr>
          <tr className="border-t border-[#6b4a2d]/50">
            <td className="py-4 pr-6 text-[#f5e6c8]">100</td>
            <td className="py-4 pr-6">£2,500</td>
            <td className="py-4 pr-6">£30,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="h-px w-24 bg-[#6b4a2d]/70 mx-auto mt-10"></div>

    {/* 70/30 uplift */}
    <p className="text-center text-lg text-[#e6cfa3] leading-relaxed mt-8">
      If the portfolio matures to a higher distribution profile (e.g.{" "}
      <span className="text-[#f5e6c8]">70% distribution / 30% reinvestment</span>):
    </p>

    <p className="text-center text-lg text-[#e6cfa3] leading-relaxed mt-4">
      • <span className="text-[#f5e6c8]">Base case, 100 machines:</span> increases from £18,000/year to{" "}
      <span className="text-[#f5e6c8]">£25,200/year</span><br />
      • <span className="text-[#f5e6c8]">Upper case, 100 machines:</span> increases from £30,000/year to{" "}
      <span className="text-[#f5e6c8]">£42,000/year</span>
    </p>

    <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
      Illustrative only — not a public offer. Final terms depend on investment structure and performance.
    </p>
  </div>
</section>


      {/* Profit allocation + dividends */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Profit Allocation & Distribution Policy
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Build-phase framework
            </p>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              During the build phase, the business prioritises growth while maintaining a reserve buffer.
              Current working framework:{" "}
              <span className="text-[#f5e6c8]">50% reinvested</span> and{" "}
              <span className="text-[#f5e6c8]">50% distributed</span>, subject to performance and reserves.
            </p>

            <div className="h-px w-16 bg-[#6b4a2d]/70 my-8"></div>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              Distributions are made from <span className="text-[#f5e6c8]">free cash flow</span> after maintaining
              an operating reserve and servicing requirements.
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] mb-4">
              Mature-phase shift
            </p>

            <p className="text-lg text-[#e6cfa3] leading-relaxed">
              As the portfolio matures and route density improves, the business intends to shift toward a higher
              distribution profile (targeting up to{" "}
              <span className="text-[#f5e6c8]">70% distribution / ~30% reinvestment</span>), subject to:
            </p>

            <ul className="space-y-3 text-lg text-[#e6cfa3] leading-relaxed mt-6">
              <li>• Maintaining a cash reserve buffer.</li>
              <li>• Uptime and servicing consistency.</li>
              <li>• Placement pipeline strength (growth opportunities).</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-[#8f6b4a] mt-10 leading-relaxed">
          This policy describes intent and framework — not a guaranteed dividend schedule.
        </p>
      </section>

      {/* Use of funds */}
      <section className="mb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Use of Funds (Deployment-Linked)
        </h2>

        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10"
        >
          <ul className="space-y-4 text-lg text-[#e6cfa3] leading-relaxed">
            <li>• Machine acquisition only against signed placements.</li>
            <li>• Initial stock and replenishment float.</li>
            <li>• Spares, contingency, and service tooling to maintain uptime.</li>
            <li>• Route buildout: storage, delivery cadence, and operational systems.</li>
          </ul>
        </div>
      </section>

    {/* Navigation */}
<section className="text-center mt-24 pt-12 border-t border-[#6b4a2d]/40">
  <div className="flex flex-col md:flex-row gap-6 items-center justify-center">

    <a
      href="/investors/vision"
      className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
    >
      ← Vision & Strategy
    </a>

    <a
      href="/investors/participate"
      className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
    >
      Participate →
    </a>

  </div>
</section>

    </main>
  );
}
