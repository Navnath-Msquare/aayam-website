import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onBookDemo, onSignIn }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, anchor) => {
    setCurrentPage(page);
    try {
      const newPath = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({}, '', newPath);
    } catch (e) {}
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-md py-1'
          : 'py-1 sm:py-1.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo (Balanced normal size) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left focus:outline-none py-0.5 shrink-0"
            aria-label="AAYAM Home"
          >
            <img
              src="/AayamLogoV1.png"
              alt="AAYAM - Every Dimension. Connected."
              className="h-7 sm:h-9 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 origin-left"
            />
          </button>

          {/* Desktop Navigation Links (Laptop, Desktop, iPad Pro Landscape) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Home Tab */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm xl:text-base font-medium transition-colors relative py-1 ${
                currentPage === 'home'
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-slate-700 hover:text-[#F15A24]'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full" />
              )}
            </button>

            {/* Platform Tab */}
            <button
              onClick={() => handleNavClick('platform')}
              className={`text-sm xl:text-base font-medium transition-colors relative py-1 ${
                currentPage === 'platform'
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-slate-700 hover:text-[#F15A24]'
              }`}
            >
              <span>Platform</span>
              {currentPage === 'platform' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full" />
              )}
            </button>

            {/* Who We Serve Tab */}
            <button
              onClick={() => handleNavClick('whoweserve')}
              className={`text-sm xl:text-base font-medium transition-colors relative py-1 ${
                currentPage === 'whoweserve'
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-slate-700 hover:text-[#F15A24]'
              }`}
            >
              <span>Who We Serve</span>
              {currentPage === 'whoweserve' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full" />
              )}
            </button>

            {/* About Tab */}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm xl:text-base font-medium transition-colors relative py-1 ${
                currentPage === 'about'
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-slate-700 hover:text-[#F15A24]'
              }`}
            >
              <span>About</span>
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full" />
              )}
            </button>

            {/* Contact Tab */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm xl:text-base font-medium transition-colors relative py-1 ${
                currentPage === 'contact'
                  ? 'text-[#F15A24] font-semibold'
                  : 'text-slate-700 hover:text-[#F15A24]'
              }`}
            >
              <span>Contact</span>
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action: Book a Demo (Sign In removed as requested) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onBookDemo}
              className="px-5 py-2 rounded-xl bg-[#F15A24] hover:bg-[#d94916] text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-orange-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile & Tablet Toggle Controls (Mobile, Tablet, iPad Pro Portrait) */}
          <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-3 shrink-0">
            <button
              onClick={onBookDemo}
              className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm whitespace-nowrap"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 sm:px-8 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 sm:space-y-4 max-w-md mx-auto">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPage === 'home' ? 'text-[#F15A24] bg-orange-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('platform')}
              className={`text-left text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPage === 'platform' ? 'text-[#F15A24] bg-orange-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Platform
            </button>
            <button
              onClick={() => handleNavClick('whoweserve')}
              className={`text-left text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPage === 'whoweserve' ? 'text-[#F15A24] bg-orange-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Who We Serve
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPage === 'about' ? 'text-[#F15A24] bg-orange-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPage === 'contact' ? 'text-[#F15A24] bg-orange-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookDemo();
                }}
                className="w-full py-3 rounded-xl bg-[#F15A24] hover:bg-[#d94916] text-white text-sm sm:text-base font-semibold shadow-md text-center transition-colors"
              >
                Book a Live Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
