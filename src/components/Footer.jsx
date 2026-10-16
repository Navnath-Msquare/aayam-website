import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer({ onNavigateHome, onNavigateAbout, onOpenContact, onOpenPolicy }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-7 sm:pt-8 pb-5 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-slate-100">
          
          {/* Col 1: Brand & Description (5 cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <button onClick={onNavigateHome} className="text-left focus:outline-none">
              <img
                src="/AayamLogoV1.png"
                alt="AAYAM - Every Dimension. Connected."
                className="h-8 sm:h-9 w-auto object-contain cursor-pointer"
              />
            </button>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Comprehensive Real Estate & Construction Workflow Suite. Connect people, approvals, progress and commitments—from blueprint to final handover.
            </p>
            {/* <div>
              <a
                href="https://aayam.msquaresoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F15A24] hover:underline"
              >
                <span>aayam.msquaresoftware.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div> */}
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#F15A24] transition-colors py-0.5 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateAbout}
                  className="hover:text-[#F15A24] transition-colors py-0.5 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact && onOpenContact()}
                  className="hover:text-[#F15A24] transition-colors py-0.5 text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy && onOpenPolicy('Privacy Policy')}
                  className="hover:text-[#F15A24] transition-colors py-0.5 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy && onOpenPolicy('Terms of Service')}
                  className="hover:text-[#F15A24] transition-colors py-0.5 text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
              Contact & Headquarters
            </h4>
            <ul className="space-y-2 text-xs">
              {/* Phone */}
              <li>
                <a
                  href="tel:9876543210"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#F15A24] transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-[#F15A24] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span className="font-semibold">+91 9876543210</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:admin@gmail.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#F15A24] transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-[#F15A24] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="font-semibold">admin@gmail.com</span>
                </a>
              </li>

              {/* Location with inline View Location */}
              <li className="flex items-center justify-between gap-2 pt-0.5">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-[#F15A24] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="font-semibold text-slate-800">Pune, Maharashtra</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 hover:bg-[#F15A24] text-[#F15A24] hover:text-white border border-orange-200/80 hover:border-transparent text-[11px] font-bold transition-all shadow-sm"
                >
                  <span>View Location</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-1.5 text-center sm:text-left">
          <p>© {currentYear} MSquare Software Systems. All rights reserved.</p>
          <p>Enterprise Real Estate & Construction Workflow Suite</p>
        </div>

      </div>
    </footer>
  );
}
