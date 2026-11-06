
export default function Gallery() {
  return (
    <section className="w-full bg-[#fdf2f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[220px]">
          
          {/* 1. Tall Left (Sushi/Ice cream in a bowl) */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery1.png" alt="Ice cream bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 2. Small Square (Pink cone) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group bg-[#fbcfe8] flex items-center justify-center p-4">
             <img src="/gallery2.png" alt="Pink cone" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 3. Large Center (Many cones) */}
          <div className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery3.png" alt="Multiple ice cream cones" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* 4. Small Square (Woman with strawberry ice cream) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery4.png" alt="Woman eating ice cream" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 5. Small Square (Bowl of ice cream) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery5.png" alt="Bowl of ice cream" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 6. Small Square (Scoops) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery6.png" alt="Ice cream scoops" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 7. Tall Right (Cones in holder) */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery7.png" alt="Cones in a holder" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 8. Square Bottom (Woman smiling) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="/gallery8.png" alt="Smiling woman" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* 9. Wide Yellow (Ice cream cone on yellow) */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-sm relative group bg-[#fcd34d] flex items-center justify-center">
             <img src="/gallery9.png" alt="Ice cream on yellow" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

        </div>

      </div>
    </section>
  );
}
