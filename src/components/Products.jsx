export default function Products() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#f472b6] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2">100% Natural</p>
          <h2 className="text-[#be185d] font-black text-3xl md:text-5xl uppercase tracking-tight">Products</h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12 items-start">
          
          {/* Card 1: Ice Creams (Pink) */}
          <div className="flex flex-col items-center group cursor-pointer w-full max-w-[320px] mx-auto md:max-w-none">
            {/* Top Image Area */}
            <div className="relative w-full flex justify-center items-end z-10 mb-[-2.5rem] md:mb-[-4rem]">
              <img 
                src="/icecream.png" 
                alt="Ice Cream Cone" 
                className="w-32 md:w-56 h-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            {/* Bottom Color Card */}
            <div className="w-full bg-[#fbcfe8] rounded-3xl pt-14 md:pt-20 pb-8 px-6 text-center flex flex-col items-center">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider mb-1">Ice Creams</h3>
              <div className="text-white/60 tracking-[0.3em] text-xl leading-none mb-4">...</div>
              <p className="text-white/95 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                Our natural creamy treats with an intense flavor and a unique texture. Prepared with milk, cream & organic ingredients.
              </p>
              <div className="w-10 h-10 rounded-full bg-white text-[#f472b6] flex items-center justify-center font-bold text-lg pb-1 shadow-sm transition-transform duration-300 group-hover:scale-110">
                +
              </div>
            </div>
          </div>

          {/* Card 2: Ice Coffee (Tan) */}
          <div className="flex flex-col items-center group cursor-pointer w-full max-w-[320px] mx-auto md:max-w-none md:mt-16">
            <div className="relative w-full flex justify-center items-end z-10 mb-[-2.5rem] md:mb-[-4rem]">
              <img 
                src="/coffeeeicecream.png" 
                alt="Iced Coffee" 
                className="w-28 md:w-40 h-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            <div className="w-full bg-[#fcd34d] rounded-3xl pt-14 md:pt-20 pb-8 px-6 text-center flex flex-col items-center">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider mb-1">Ice Coffee</h3>
              <div className="text-white/60 tracking-[0.3em] text-xl leading-none mb-4">...</div>
              <p className="text-white/95 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                A perfectly made iced coffee drink, elevated by coffee ice cubes that keep it cold and full of flavor.
              </p>
              <div className="w-10 h-10 rounded-full bg-white text-[#fcd34d] flex items-center justify-center font-bold text-lg pb-1 shadow-sm transition-transform duration-300 group-hover:scale-110">
                +
              </div>
            </div>
          </div>

          {/* Card 3: Milk Shakes (Green) */}
          <div className="flex flex-col items-center group cursor-pointer w-full max-w-[320px] mx-auto md:max-w-none">
            <div className="relative w-full flex justify-center items-end z-10 mb-[-2.5rem] md:mb-[-4rem]">
              <img 
                src="/milkshake.png" 
                alt="Milkshake" 
                className="w-28 md:w-48 h-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            <div className="w-full bg-[#bbf7d0] rounded-3xl pt-14 md:pt-20 pb-8 px-6 text-center flex flex-col items-center">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider mb-1">Milk Shakes</h3>
              <div className="text-white/60 tracking-[0.3em] text-xl leading-none mb-4">...</div>
              <p className="text-white/95 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                A delicious light milk shake that’s blended with vanilla ice cream, mixed with your favorite toppings.
              </p>
              <div className="w-10 h-10 rounded-full bg-white text-[#bbf7d0] flex items-center justify-center font-bold text-lg pb-1 shadow-sm transition-transform duration-300 group-hover:scale-110">
                +
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
