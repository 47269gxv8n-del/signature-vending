export default function Home() {
  return (
    <main className="px-8 py-10 max-w-7xl mx-auto">

{/* HERO */}
<section className="flex flex-col items-center pt-10 pb-14 border-b border-[#6b4a2d]/40">


  <img
  src="/Lobbypic.png"
  alt="Signature Vending"
className="h-[20rem] md:h-auto w-[30rem] mx-auto mb-12"



/>

 

  <div className="h-px w-32 bg-[#6b4a2d] mx-auto mt-10 mb-10"></div>

  <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#e6cfa3] leading-relaxed">
    High-end vending solutions designed for modern offices,
    hospitality, and premium environments.
  </p>
</section>
{/* FEATURE CARDS */} 
<section className="grid gap-12 md:grid-cols-3">
   <div className="relative rounded-2xl p-10 border border-[#6b4a2d] bg-gradient-to-b from-[#3a1f14] to-[#2a140c] hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
     <h3 className="text-xl mb-4 tracking-wide text-[#f5e6c8]"> Curated Products </h3> <p className="text-[#e6cfa3] leading-relaxed"> Thoughtfully selected premium snacks and beverages designed to complement refined spaces. 
      </p> 
      </div> 
      <div className="relative rounded-2xl p-10 border border-[#6b4a2d] bg-gradient-to-b from-[#3a1f14] to-[#2a140c] hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"> 
        <h3 className="text-xl mb-4 tracking-wide text-[#f5e6c8]"> Elegant Machines </h3>
         <p className="text-[#e6cfa3] leading-relaxed"> Design-led vending machines that integrate seamlessly into luxury interiors. </p>
          </div> 
          <div className="relative rounded-2xl p-10 border border-[#6b4a2d] bg-gradient-to-b from-[#3a1f14] to-[#2a140c] hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"> 
            <h3 className="text-xl mb-4 tracking-wide text-[#f5e6c8]"> Seamless Service </h3>
             <p className="text-[#e6cfa3] leading-relaxed"> Fully managed solutions delivering effortless convenience and reliability. </p>
              </div>

</section>
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
