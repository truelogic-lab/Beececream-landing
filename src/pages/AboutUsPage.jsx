export default function AboutUsPage() {
  return (
    <div className="min-h-[80vh] bg-[#fdf2f8] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#be185d] uppercase mb-4">About Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">We are a team of ice cream enthusiasts dedicated to making the world a sweeter place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="flex flex-col items-center text-center p-8 group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
              <svg className="w-10 h-10 text-[#be185d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#be185d] mb-4">Our Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">To create the most delicious, natural ice cream while supporting local farmers and reducing our environmental footprint.</p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center text-center p-8 group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
              <svg className="w-10 h-10 text-[#be185d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#be185d] mb-4">Our Values</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Authenticity, quality, and joy. We source only the best ingredients and craft every batch with love.</p>
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#be185d] uppercase text-center mb-10">Meet The Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md"></div>
              <h3 className="font-bold text-gray-800 group-hover:text-[#be185d] transition-colors">Team Member {i}</h3>
              <p className="text-xs text-gray-500">Head of Ice Cream</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
