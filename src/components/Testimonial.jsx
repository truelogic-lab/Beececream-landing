
export default function Testimonial() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Reviewer Image */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 shadow-md border-2 border-pink-100">
          <img 
            src="/testimonial.png" 
            alt="Jessica" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote Text */}
        <h3 className="text-lg md:text-2xl font-bold text-gray-800 leading-snug mb-4">
          "The best ice cream in Chicago!<br className="hidden md:block" /> 
          Fresh, exploding with taste, melting in your mouth!"
        </h3>

        {/* Author */}
        <p className="text-sm font-semibold text-[#be185d] mb-6">
          Jessica, Chicago
        </p>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[#be185d] rounded-full"></div>
          <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
