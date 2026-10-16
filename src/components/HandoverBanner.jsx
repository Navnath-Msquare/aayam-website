import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HandoverBanner({ onBookDemo }) {
  return (
    <section id="planning" className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] py-14 sm:py-18 lg:py-22 overflow-hidden flex items-center">
      {/* Background Image - Positioned to show full heads and helmets with proper headroom */}
      <img
        src="/images/planning-handover.jpg"
        alt="Engineers planning construction from planning to handover"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_12%] sm:object-[center_8%] md:object-top filter contrast-[1.08] saturate-[1.12] brightness-[0.96]"
      />

      {/* Focused Gradient Overlay: Keeps left text readable while right image stays 100% sharp and original */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent max-w-2xl sm:max-w-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent sm:hidden" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl text-white space-y-3.5 sm:space-y-4 reveal-from-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#F15A24] border border-orange-500/40 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            End-to-End Lifecycle
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight drop-shadow-md">
            From Planning to Handover.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-sm">
            Keep decisions, responsibilities and project updates connected across every phase of your project.
          </p>

          <div className="pt-2 sm:pt-3">
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <span>Explore Platform Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
