
export default function HowItsMade() {
  return (
    <section className="relative w-full bg-[#fdf2f8] py-20 overflow-hidden">
      
      {/* Decorative background blurred shapes */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#f472b6] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2">Tradition and Love</p>
          <h2 className="text-[#be185d] font-black text-3xl md:text-5xl uppercase tracking-tight">How it's made?</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          
          {/* Left Column: Image Area */}
          <div className="relative flex justify-center items-center h-[350px] md:h-[450px]">
            {/* Faded Background Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fbcfe8] font-black text-6xl md:text-8xl uppercase tracking-tighter opacity-60 z-0 select-none whitespace-nowrap">
              Big Eco
            </div>
            
            {/* Cow Image */}
            <div className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/cowimage.png" 
                alt="Cow in a field" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Milk Jug Overlapping */}
            <img 
              src="/milkjarr.png" 
              alt="Milk jug" 
              className="absolute bottom-0 right-4 md:right-12 w-24 md:w-32 h-auto object-contain z-20 drop-shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4 font-bold">
              For the preparation, we only use products of natural origin from local farmers.
            </p>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
              Pellentesque turpis nisi, auctor vitae nisi auctor, imperdiet fringilla lorem. Donec blandit eros sit amet nisi porttitor dapibus. Vivamus sit amet nisl tortor. Vestibulum condimentum mauris id nisl sodales, sit amet ultrices mauris maximus.
            </p>
            <button type="button" className="bg-white text-[#be185d] border border-[#fbcfe8] text-xs md:text-sm font-bold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              Learn more <span className="text-xs">➔</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-[#fbcfe8] pt-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="text-[#be185d] mb-2">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <div className="text-4xl font-black text-[#be185d] mb-1">72<span className="text-xl">L</span></div>
            <p className="text-xs text-gray-500 max-w-[150px]">Bio milk & cream each day to produce ice cream</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="text-[#be185d] mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <div className="text-4xl font-black text-[#be185d] mb-1">16<span className="text-xl">KG</span></div>
            <p className="text-xs text-gray-500 max-w-[150px]">Fruits are added daily to our ice cream</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="text-[#be185d] mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div className="text-4xl font-black text-[#be185d] mb-1">∞</div>
            <p className="text-xs text-gray-500 max-w-[150px]">We put love into the production of ice cream</p>
          </div>
        </div>

      </div>
    </section>
  );
}
