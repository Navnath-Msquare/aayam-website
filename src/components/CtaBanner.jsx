import React from 'react';

export default function CtaBanner({ onBookDemo }) {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-24 bg-[#0A192F] overflow-hidden text-center text-white">
      {/* Subtle geometric angled background watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,0 100,0 80,100 0,100" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-7 reveal-zoom-in">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Give Your Next Project a Clear Direction.
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Experience real-time site updates, automated stakeholder follow-ups, and frictionless approvals with AAYAM.
        </p>

        <div className="pt-2">
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
