import React from 'react';
import { 
  Eye, 
  Target, 
  Lightbulb, 
  Users, 
  GitFork, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';

export default function AboutPage({ onBookDemo, onNavigateHome }) {
  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'Make information easy to understand and act on.'
    },
    {
      icon: Users,
      title: 'Accountability',
      description: 'Give responsibilities and commitments clear ownership.'
    },
    {
      icon: GitFork,
      title: 'Collaboration',
      description: 'Keep stakeholders connected throughout the project.'
    },
    {
      icon: ShieldCheck,
      title: 'Trust',
      description: 'Build confidence through reliable records and transparent updates.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. About Hero Section */}
      <section className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] overflow-hidden bg-slate-950 pt-28 sm:pt-36 pb-16 flex items-center">
        <img
          src="/images/hero-slide-1.jpg"
          alt="AAYAM Architecture and Construction Platform"
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[0.98]"
        />
        {/* Focused Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent max-w-3xl lg:max-w-4xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:hidden" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left text-white space-y-5">
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F15A24] uppercase drop-shadow-sm">
                ABOUT AAYAM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Connecting Every<br />
              Dimension of<br />
              Your Project.
            </h1>

            {/* Subtitles */}
            <div className="space-y-1.5 pt-1">
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium">
                A shared platform for people, progress and project responsibility.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-normal">
                A product of MSquare Software
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={onBookDemo}
                className="px-6 sm:px-7 py-3 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                Book a Demo
              </button>

              <button
                onClick={onNavigateHome}
                className="px-6 sm:px-7 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white font-semibold text-sm sm:text-base border border-slate-600/80 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm text-center"
              >
                Explore AAYAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why AAYAM Exists Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 reveal-from-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                Why AAYAM Exists
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
                Projects involve many people, decisions and commitments. AAYAM brings these dimensions together so teams can coordinate clearly, keep records organised and act on what matters.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 reveal-from-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <img
                  src="/images/why-aayam-exists.jpg"
                  alt="Engineers reviewing blueprints on site - Why AAYAM exists"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Vision & Our Mission Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_18px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 space-y-4 group cursor-pointer reveal-from-left">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                To make every project clearer, more connected and accountable.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_18px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 space-y-4 group cursor-pointer reveal-from-right">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                To help developers, consultants, societies and site teams coordinate work, track commitments and move projects forward with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Core Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_16px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center group cursor-pointer reveal-on-scroll ${delays[idx % 4]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. A Product of MSquare Software Section */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] py-12 sm:py-16 lg:py-20 overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src="/images/msquare-software-banner.jpg"
          alt="MSquare Software Real Estate Solutions"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay for high text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl text-white space-y-3.5 sm:space-y-4 reveal-from-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              A Product of<br />
              MSquare Software
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed">
              AAYAM is developed by MSquare Software Systems Pvt. Ltd., bringing its technology expertise to construction and real estate coordination.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium pt-1">
              Building Trusted Technology Platforms.
            </p>

            <div className="pt-2 sm:pt-3">
              <a
                href="https://msquaresoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/60 hover:border-white transition-all duration-200 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Learn About MSquare Software</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Move Your Next Project Forward with Confidence Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 reveal-zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Move Your Next Project Forward<br className="hidden sm:inline" /> with Confidence.
          </h2>

          <div>
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
