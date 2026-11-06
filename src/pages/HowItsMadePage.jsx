export default function HowItsMadePage() {
  const steps = [
    { title: 'Organic Farming', desc: 'We source our milk and cream from local organic farmers.', icon: (
      <svg className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { title: 'Fresh Ingredients', desc: 'Fruits are harvested daily and mixed into our base.', icon: (
      <svg className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )},
    { title: 'Traditional Churning', desc: 'Slow-churned in small batches for perfect texture.', icon: (
      <svg className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    )},
    { title: 'Quality Control', desc: 'Every batch is taste-tested by our master chefs.', icon: (
      <svg className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
  ];

  return (
    <div className="min-h-[80vh] bg-[#fdf2f8] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f472b6] font-bold tracking-[0.2em] uppercase text-sm mb-2">The Process</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#be185d] uppercase mb-4">How It's Made</h1>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-10 md:before:mx-auto md:before:translate-x-0 before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#fbcfe8] before:to-transparent">
          {steps.map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon Marker */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#be185d] shadow-md border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 z-10">
                {item.icon}
              </div>
              {/* Content */}
              <div className="w-[calc(100%-6rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
