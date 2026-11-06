export default function ProductsPage() {
  const products = [
    { name: 'Classic Vanilla', desc: 'Madagascar vanilla beans and organic cream.', icon: (
      <svg className="w-12 h-12 text-[#fbcfe8] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    )},
    { name: 'Dark Chocolate', desc: 'Rich 70% cocoa and dark chocolate chunks.', icon: (
      <svg className="w-12 h-12 text-[#78350f] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    )},
    { name: 'Strawberry Swirl', desc: 'Fresh local strawberries and sweet cream.', icon: (
      <svg className="w-12 h-12 text-[#f472b6] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    )},
    { name: 'Salted Caramel', desc: 'Slow-cooked caramel and Himalayan pink salt.', icon: (
      <svg className="w-12 h-12 text-[#d97706] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )},
    { name: 'Mint Chip', desc: 'Cool peppermint and dark chocolate shavings.', icon: (
      <svg className="w-12 h-12 text-[#34d399] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )},
    { name: 'Iced Coffee', desc: 'Cold-brewed coffee mixed with sweet cream.', icon: (
      <svg className="w-12 h-12 text-[#6b7280] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 8h1a4 4 0 010 8h-1M4 8h16v9a4 4 0 01-4 4H8a4 4 0 01-4-4V8z" /></svg>
    )},
  ];

  return (
    <div className="min-h-[80vh] bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#be185d] uppercase text-center mb-4">Our Menu</h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">Explore our full range. Hover over the icons to see them come to life.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, i) => (
            <div key={i} className="group flex flex-col items-center text-center cursor-pointer">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-inner">
                {product.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-[#be185d]">{product.name}</h2>
              <p className="text-gray-500 text-sm">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
