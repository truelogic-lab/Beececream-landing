import { useState } from 'react';
import { Link } from 'react-router-dom';

// Navigation data to avoid repetition
const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: "How it's made", path: '/how-its-made' },
  { name: 'Our history', path: '/our-history' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contact us', path: '/contact-us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffb6c1] relative z-50">
      <div className="py-4 px-4 md:px-12 flex items-center justify-between text-white">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          {/* Circular container for the logo */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img 
              src="/heroicecream.png" 
              alt="Beececream Logo" 
              className="w-full h-full object-cover scale-[1.8] translate-y-2"
            />
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-wider text-[#c71585] uppercase">
            Beececream
          </span>
        </Link>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-[#c71585] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Socials & Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Social Icons (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="hover:text-[#c71585]">f</a>
            <a href="#" className="hover:text-[#c71585]">i</a>
            <a href="#" className="hover:text-[#c71585]">t</a>
          </div>
          
          {/* Location Button (Hidden on very small screens) */}
          <Link 
            to="/locations" 
            className="hidden sm:flex bg-white text-gray-800 text-xs md:text-sm font-bold py-2 px-3 md:px-5 rounded-full items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <span className="hidden md:inline">Our locations</span>
            <span className="md:hidden">Locations</span>
            <span className="text-[10px] md:text-xs">➔</span>
          </Link>

          {/* Hamburger Button (Visible only on mobile) */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Staggered Animation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#ffb6c1] border-t border-[#f9a8d4] shadow-xl flex flex-col py-2 px-4 overflow-hidden">
          {NAV_LINKS.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)} 
              className="py-3 text-white font-semibold border-b border-[#f9a8d4]/50 hover:pl-2 transition-all duration-300 animate-[dropIn_0.4s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
