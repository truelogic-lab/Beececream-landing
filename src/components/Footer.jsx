import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fdf2f8] pt-16 pb-8 flex flex-col items-center text-center px-4 md:px-6">
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Large Heading */}
        <h2 className="text-[#f472b6] font-extrabold text-2xl md:text-4xl uppercase tracking-tight leading-tight mb-2">
          Homemade Ice creams<br />
          Created with <span className="text-[#be185d] text-3xl md:text-5xl">Love & Fun!</span>
        </h2>

        {/* Contact Info */}
        <p className="text-gray-500 text-sm font-medium mb-10 mt-4">
          Feel free to call <a href="tel:+41205783284" className="hover:text-[#be185d]">+41 205 783 284</a>
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold text-gray-800 mb-12">
          <Link to="/products" className="hover:text-[#be185d] transition-colors">Products</Link>
          <Link to="/how-its-made" className="hover:text-[#be185d] transition-colors">How it's made</Link>
          <Link to="/our-history" className="hover:text-[#be185d] transition-colors">Our history</Link>
          <Link to="/about-us" className="hover:text-[#be185d] transition-colors">About us</Link>
          <Link to="/contact-us" className="hover:text-[#be185d] transition-colors">Contact us</Link>
        </nav>

        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-gray-400">
          © 2018 Beececream - Byteme. All Rights Reserved. Multia Group.
        </p>

      </div>
    </footer>
  );
}
