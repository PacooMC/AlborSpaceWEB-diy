import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`px-6 py-4 fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#030305]/80 backdrop-blur-lg translate-y-0 border-b border-white/5' : 'bg-transparent -translate-y-1'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <Link to="/solutions" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider">
              Solutions
            </Link>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#030305]/90 backdrop-blur-lg border border-white/5 rounded-lg py-2 min-w-[200px]">
                <Link to="/solutions/networks" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">5G NTN Networks</Link>
                <Link to="/solutions/cubesats" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">Cubesat Payloads</Link>
                <Link to="/solutions/sdr" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">SDR Solutions</Link>
                <Link to="/solutions/automation" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">Network Automation</Link>
                <Link to="/solutions/development" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">Custom Development</Link>
                <Link to="/solutions/research" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5">6G Research</Link>
              </div>
            </div>
          </div>
          <Link to="/team" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider">
            Team
          </Link>
          <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`w-6 h-6 text-white absolute inset-0 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-95' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-6 h-6 text-white absolute inset-0 transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-95'}`} />
          </div>
        </button>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#030305] transition-all duration-500 ease-out z-50 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6">
          <div className="space-y-4 text-center">
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Solutions</h3>
            <Link to="/solutions/networks" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">5G NTN Networks</Link>
            <Link to="/solutions/cubesats" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">Cubesat Payloads</Link>
            <Link to="/solutions/sdr" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">SDR Solutions</Link>
            <Link to="/solutions/automation" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">Network Automation</Link>
            <Link to="/solutions/development" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">Custom Development</Link>
            <Link to="/solutions/research" className="block text-lg font-light tracking-wider text-white/70 hover:text-white">6G Research</Link>
          </div>
          <Link to="/team" className="text-2xl font-light tracking-wider text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
            Team
          </Link>
          <Link to="/contact" className="text-2xl font-light tracking-wider text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
