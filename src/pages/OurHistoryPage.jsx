export default function OurHistoryPage() {
  const milestones = [
    { year: '2010', title: 'The First Scoop', desc: 'Founded in a small kitchen with just two flavors.' },
    { year: '2014', title: 'First Store', desc: 'Opened our first physical store, selling out on day one.' },
    { year: '2018', title: 'Going National', desc: 'Expanded to New York and Washington.' },
    { year: '2024', title: 'The Future', desc: 'Continuing to innovate with new flavors.' },
  ];

  return (
    <div className="min-h-[80vh] bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#be185d] uppercase text-center mb-16">Our History</h1>

        <div className="relative border-l-2 border-[#fbcfe8] ml-4 md:ml-0 md:mx-auto md:w-2/3">
          {milestones.map((item, i) => (
            <div key={i} className="mb-12 ml-10 relative group">
              {/* Animated Dot */}
              <div className="absolute -left-[51px] top-1 w-6 h-6 bg-white border-4 border-[#be185d] rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-[#be185d]"></div>
              
              <div className="text-[#be185d] font-black text-3xl mb-1 transition-transform duration-300 group-hover:translate-x-2">{item.year}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 transition-transform duration-300 group-hover:translate-x-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-transform duration-300 group-hover:translate-x-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
