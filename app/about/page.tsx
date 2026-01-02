export default function About() {
  return (
    <main className="px-8 py-24 max-w-5xl mx-auto">

      <h1 className="text-4xl font-light tracking-wide mb-10 text-[#f5e6c8]">
        About Signature Vending
      </h1>

      <div className="space-y-8 text-lg text-[#e6cfa3] leading-relaxed">
        <p>
          Signature Vending was created to redefine convenience in premium
          environments. We believe vending should enhance a space — not detract from it.
        </p>

        <p>
          From curated product selections to design-led machines, our solutions are
          tailored for offices, hospitality venues, and refined environments that
          expect more than standard vending.
        </p>

        <p>
          We manage everything end-to-end, delivering a seamless, reliable service
          that reflects the quality of your brand.
        </p>
      </div>
       {/* Soft CTA */}
      <section className="mt-32 mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
          Designed for Premium Spaces
        </h2>

        <p className="text-lg text-[#e6cfa3] mb-10">
          Discover how Signature Vending can elevate your workplace,
          hospitality venue, or private environment.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 border border-[#d6b97a] text-sm uppercase tracking-[0.35em] text-[#f5e6c8]
                     hover:bg-[#d6b97a] hover:text-[#2a140c] transition-all duration-300"
        >
          Enquire
        </a>
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
