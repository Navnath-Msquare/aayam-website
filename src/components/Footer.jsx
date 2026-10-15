import React from 'react';

export default function Footer({ onNavigateHome, onNavigateAbout, onOpenContact, onOpenPolicy }) {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 sm:py-12 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <button onClick={onNavigateHome} className="text-left">
              <img
                src="/AayamLogoV1.png"
                alt="AAYAM - Every Dimension. Connected."
                className="h-10 w-auto object-contain cursor-pointer"
              />
            </button>
          </div>

          {/* Center: Domain link */}
          <div className="hidden md:block">
            <div className="h-8 w-px bg-slate-200 mx-auto" />
          </div>

          <div className="text-sm font-medium text-slate-600 hover:text-[#F15A24] transition-colors">
            <a href="https://aayam.msquaresoftware.com" target="_blank" rel="noopener noreferrer">
              aayam.msquaresoftware.com
            </a>
          </div>

          <div className="hidden md:block">
            <div className="h-8 w-px bg-slate-200 mx-auto" />
          </div>

          {/* Right: Legal & Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <button
              onClick={onNavigateAbout}
              className="hover:text-[#F15A24] transition-colors py-1"
            >
              About
            </button>
            <button
              onClick={() => onOpenContact && onOpenContact()}
              className="hover:text-[#F15A24] transition-colors py-1"
            >
              Contact
            </button>
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('Privacy Policy')}
              className="hover:text-[#F15A24] transition-colors py-1"
            >
              Privacy
            </button>
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('Terms of Service')}
              className="hover:text-[#F15A24] transition-colors py-1"
            >
              Terms
            </button>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MSquare Software Systems. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Enterprise Real Estate & Construction Workflow Suite</p>
        </div>
      </div>
    </footer>
  );
}
