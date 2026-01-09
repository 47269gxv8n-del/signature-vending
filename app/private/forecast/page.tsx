export default function Page() {
  const machineCounts = [10, 25, 50, 100];

  // Assumptions
  const baseNetPerMachine = 300;
  const upperNetPerMachine = 500;

  // Profit allocation
  const buildDist = 0.5; // 50% distributed (50% reinvest)
  const matureDist = 0.7; // 70% distributed (30% reinvest)

  // Example equity split (illustrative)
  const investorEquity = 0.1; // 10%
  const founderEquity = 0.9; // 90%

  function formatGBP(n: number) {
    return `£${Math.round(n).toLocaleString("en-GB")}`;
  }

  function rows(netPerMachine: number, distRatio: number) {
    return machineCounts.map((machines) => {
      const monthlyNet = machines * netPerMachine;
      const monthlyDistPool = monthlyNet * distRatio;
      const monthlyReinvest = monthlyNet * (1 - distRatio);

      const founderMonthly = monthlyDistPool * founderEquity;
      const investorMonthly = monthlyDistPool * investorEquity;

      return {
        machines,
        monthlyNet,
        monthlyReinvest,
        monthlyDistPool,
        founderMonthly,
        investorMonthly,
        founderYear: founderMonthly * 12,
        investorYear: investorMonthly * 12,
      };
    });
  }

  const baseBuild = rows(baseNetPerMachine, buildDist);
  const baseMature = rows(baseNetPerMachine, matureDist);
  const upperBuild = rows(upperNetPerMachine, buildDist);
  const upperMature = rows(upperNetPerMachine, matureDist);

  const ScenarioTable = ({
    title,
    subtitle,
    note,
    data,
  }: {
    title: string;
    subtitle: string;
    note: string;
    data: ReturnType<typeof rows>;
  }) => (
    <div
      className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-2 text-center">
        {title}
      </p>
      <p className="text-center text-lg text-[#e6cfa3] leading-relaxed mb-8">
        {subtitle}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#d6b97a] text-xs uppercase tracking-[0.35em]">
              <th className="py-3 pr-6">Machines</th>
              <th className="py-3 pr-6">Net / month</th>
              <th className="py-3 pr-6">Reinvest</th>
              <th className="py-3 pr-6">Distribution pool</th>
              <th className="py-3 pr-6">Founder (90%) / month</th>
              <th className="py-3 pr-6">Founder (90%) / year</th>
            </tr>
          </thead>

          <tbody className="text-[#e6cfa3]">
            {data.map((r) => (
              <tr key={r.machines} className="border-t border-[#6b4a2d]/50">
                <td className="py-4 pr-6 text-[#f5e6c8]">{r.machines}</td>
                <td className="py-4 pr-6">{formatGBP(r.monthlyNet)}</td>
                <td className="py-4 pr-6">{formatGBP(r.monthlyReinvest)}</td>
                <td className="py-4 pr-6">{formatGBP(r.monthlyDistPool)}</td>
                <td className="py-4 pr-6">{formatGBP(r.founderMonthly)}</td>
                <td className="py-4 pr-6">{formatGBP(r.founderYear)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Investor note (small, not the focus) */}
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="rounded-2xl bg-[#2a140c]/45 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
            Investor note (example)
          </p>
          <p className="text-lg text-[#e6cfa3] leading-relaxed">
            If a private investor held <span className="text-[#f5e6c8]">10%</span>, they would receive{" "}
            <span className="text-[#f5e6c8]">10%</span> of the distribution pool (the remaining{" "}
            <span className="text-[#f5e6c8]">90%</span> shown above).
          </p>
        </div>

        <div className="rounded-2xl bg-[#2a140c]/45 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">
            Assumption reminder
          </p>
          <p className="text-lg text-[#e6cfa3] leading-relaxed">
            {note}
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-[#8f6b4a] mt-8 leading-relaxed">
        Illustrative only. Real results vary by site quality, product mix, uptime and operating density.
      </p>
    </div>
  );

  return (
    <main className="px-8 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
          Private — Family Brief
        </p>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#f5e6c8]">
          Private Forecast
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
          A clear view of what Signature Vending can generate at scale, using conservative and upper-case
          scenarios — and showing how profit allocation changes from build phase to mature portfolio.
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

      {/* Key assumptions */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-8 text-center">
            Assumptions Used On This Page
          </p>

          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Base net profit</p>
              <p className="text-2xl text-[#f5e6c8] font-light">£300</p>
              <p className="text-sm text-[#e6cfa3] mt-2">
  Per machine / month (£9/day base case, £16/day upper case equivalent).
</p>

            
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Upper net profit</p>
              <p className="text-2xl text-[#f5e6c8] font-light">£500</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Per machine / month.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Build phase</p>
              <p className="text-2xl text-[#f5e6c8] font-light">50 / 50</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Reinvest / Dividend distribute.</p>
            </div>

            <div className="rounded-2xl bg-[#2a140c]/45 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8f6b4a] mb-2">Mature phase</p>
              <p className="text-2xl text-[#f5e6c8] font-light">30 / 70</p>
              <p className="text-sm text-[#e6cfa3] mt-2">Reinvest / Dividend distribute.</p>
            </div>
          </div>

          <div className="h-px w-24 bg-[#6b4a2d]/70 mx-auto mt-10"></div>

         <p className="text-center text-lg text-[#e6cfa3] leading-relaxed mt-8">
  Base case is framed as{" "}
  <span className="text-[#f5e6c8]">£9/day net profit</span> per machine, with an{" "}
  <span className="text-[#f5e6c8]">upper case of £16/day net profit</span>.
</p>


          <p className="text-center text-sm text-[#8f6b4a] mt-6 leading-relaxed">
            This forecast is illustrative. Actual performance varies by placement quality, product mix, and operations.
          </p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-10 text-[#f5e6c8]">
          Portfolio Scenarios
        </h2>

        <div className="grid gap-10">
          <ScenarioTable
            title="Base Case — Build Phase (50% distribute)"
            subtitle="Assumes £300 net profit per machine/month with 50% reinvestment and 50% Dividend distributions."
            note="Base case: £300 net/month per machine (£9/day equivalent)."
            data={baseBuild}
          />

          <ScenarioTable
            title="Base Case — Mature Phase (70% Dividend distribute)"
            subtitle="Same base case economics, with higher distributions once the portfolio is stable."
            note="Mature phase increases distributions once routes, reserves, and uptime are stable."
            data={baseMature}
          />

          <ScenarioTable
            title="Upper Case — Build Phase (50% Dividend distribute)"
            subtitle="Assumes £500 net profit per machine/month with 50% reinvestment and 50% distributions."
            note="Upper case: strong sites and optimised product performance."
            data={upperBuild}
          />

          <ScenarioTable
            title="Upper Case — Mature Phase (70% Dividend distribute)"
            subtitle="Upper-case performance with a mature portfolio distribution profile."
            note="Mature phase increases distributions while maintaining a reserve buffer."
            data={upperMature}
          />
        </div>
      </section>

      {/* Plain-English takeaway */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-[#6b4a2d]/70 bg-gradient-to-b from-[#3a1f14] to-[#2a140c]
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-10 md:p-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#d6b97a] mb-6">
            The Simple Takeaway
          </p>

          <p className="text-xl md:text-2xl text-[#f5e6c8] leading-relaxed font-light">
            Build phase prioritises growth (50/50). Mature phase prioritises cash returns (30/70),
            once routes, reserves, and placement momentum are stable.
          </p>

          <p className="text-lg text-[#e6cfa3] leading-relaxed mt-8">
            The goal is a portfolio that compounds early — then yields predictably.
          </p>
        </div>
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
            href="/investors/participate"
            className="text-sm uppercase tracking-[0.35em] text-[#d6b97a] hover:text-[#f5e6c8] transition-colors duration-300"
          >
            Participate →
          </a>
        </div>

        <p className="mt-6 text-sm tracking-widest text-[#8f6b4a]">
          Private page — share carefully.
        </p>
      </section>
    </main>
  );
}
