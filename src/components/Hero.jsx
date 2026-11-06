import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrollProgress(0);
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = 600; 

          if (scrollY <= 0) {
            setScrollProgress(0);
          } else if (scrollY > heroHeight) {
            setScrollProgress(1); 
          } else {
            setScrollProgress(scrollY / heroHeight);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#fbcfe8] overflow-hidden pt-6 pb-6 md:pt-20 md:pb-32">
      
      {/* Decorative background dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 md:items-center">
          
          {/* ================= MOBILE IMAGE (Top) / DESKTOP IMAGE (Center) ================= */}
          <div className="w-full relative flex justify-center items-center order-1 md:order-2 z-10">
            {/* Background circle */}
            <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#f9a8d4] rounded-full opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <img 
              src="/heroicecream.png" 
              alt="Giant stack of colorful ice cream" 
              style={{
                transform: `translateX(${scrollProgress * -300}px) translateY(64px) scale(${1 - scrollProgress * 0.3})`,
                opacity: 1 - scrollProgress,
                transition: 'transform 0.05s linear, opacity 0.05s linear'
              }}
              // Using a custom keyframe animation for the initial slide-in
              className="relative z-10 w-full max-w-[260px] md:max-w-none md:w-[600px] lg:w-[700px] h-auto object-contain drop-shadow-2xl animate-[slideInLeft_1.5s_ease-out_forwards]"
            />
          </div>

          {/* ================= MOBILE TEXT (Middle) / DESKTOP TEXT (Left) ================= */}
          <div className="w-full md:w-auto flex flex-col z-20 order-2 md:order-1 items-center md:items-start text-center md:text-left animate-[fadeUp_1s_ease-out_forwards]">
            <h1 className="text-white font-extrabold text-[32px] md:text-5xl lg:text-[64px] leading-[1.05] tracking-tight uppercase drop-shadow-sm">
              Homemade<br />
              Ice creams<br />
              Created with
            </h1>
            <h2 className="text-[#be185d] font-black text-4xl md:text-6xl lg:text-[80px] uppercase leading-none mt-1 mb-6" style={{ WebkitTextStroke: '1px #be185d' }}>
              Love & Fun!
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-6 md:mb-12">
              <Link to="/products" className="bg-[#f472b6] hover:bg-[#ec4899] text-white text-sm md:text-base font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center gap-2 transition-all shadow-sm hover:scale-105">
                Products <span className="text-xs">➔</span>
              </Link>
              <Link to="/how-its-made" className="bg-white hover:bg-gray-50 text-gray-800 text-sm md:text-base font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center gap-2 transition-all shadow-sm hover:scale-105">
                How it's made? <span className="text-xs">➔</span>
              </Link>
            </div>

            {/* Big Eco Section (Desktop Only) */}
            <div className="hidden md:flex items-end gap-4">
              <div className="text-white font-black text-4xl lg:text-5xl leading-none uppercase">
                Big<br />Eco
              </div>
              <img 
                src="/milkjar.png" 
                alt="Milk bottle" 
                className="w-16 md:w-24 h-auto object-contain mb-2"
              />
              <p className="text-[10px] md:text-xs text-white/80 max-w-[150px] md:max-w-[200px] leading-tight mb-2">
                For the preparation, we only use products of natural origin from farmers.
              </p>
            </div>
          </div>

          {/* ================= MOBILE BOTTOM ROW / DESKTOP RIGHT COLUMN ================= */}
          <div className="w-full flex flex-col items-center md:items-end justify-between order-3 md:order-3 z-20 mt-2 md:mt-0 animate-[fadeUp_1.2s_ease-out_forwards]">
            
            {/* Mobile Layout: Compact row */}
            <div className="flex md:hidden items-center justify-between w-full px-4 py-3 bg-white/30 rounded-2xl backdrop-blur-sm">
              <img src="/milkjar.png" alt="Milk jar" className="w-10 h-auto object-contain" />

              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#be185d] leading-none">16</div>
                  <div className="text-[10px] font-bold text-[#be185d] uppercase tracking-wider mt-1">Flavours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#be185d] leading-none">23</div>
                  <div className="text-[10px] font-bold text-[#be185d] uppercase tracking-wider mt-1">Toppings</div>
                </div>
              </div>

              <img src="/ladywitthice.png" alt="Woman eating ice cream" className="w-12 h-auto object-contain rounded-full shadow-sm" />
            </div>

            {/* Desktop Layout: Stacked column */}
            <div className="hidden md:flex flex-col items-end h-full gap-6">
              <div className="text-right">
                <div className="text-5xl lg:text-7xl font-black text-[#be185d] leading-none">16</div>
                <div className="text-sm lg:text-base font-bold text-[#be185d] uppercase tracking-wider">Flavours</div>
              </div>
              <div className="text-right">
                <div className="text-5xl lg:text-7xl font-black text-[#be185d] leading-none">23</div>
                <div className="text-sm lg:text-base font-bold text-[#be185d] uppercase tracking-wider">Toppings</div>
              </div>

              <div className="relative flex flex-col items-end mt-auto pt-12">
                <div className="bg-white text-[#be185d] font-black text-lg lg:text-xl py-2 px-6 rounded-full shadow-lg mb-4 relative z-10 transform -rotate-3">
                  5000000 TASTY!
                  <div className="absolute bottom-[-10px] left-4 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent"></div>
                </div>
                <img 
                  src="/ladywitthice.png" 
                  alt="Woman eating ice cream" 
                  className="w-32 lg:w-48 h-auto object-contain rounded-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
