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

    </main>
  );
}
