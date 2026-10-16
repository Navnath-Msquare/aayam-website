import React, { useState } from 'react';
import { 
  GitFork, 
  Users2, 
  HardHat, 
  CheckCircle2, 
  ArrowRight,
  BarChart3
} from 'lucide-react';

export default function WhoWeServePage({ onBookDemo }) {
  const [activeTab, setActiveTab] = useState('developers');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'developers', name: 'Developers', icon: BarChart3 },
    { id: 'consultants', name: 'Project Consultants', icon: GitFork },
    { id: 'societies', name: 'Housing Societies', icon: Users2 },
    { id: 'siteteams', name: 'Site Teams', icon: HardHat },
  ];

  const roles = [
    {
      id: 'developers',
      title: 'For Developers & Project Owners',
      subtitle: 'See what needs attention across your projects.',
      image: '/images/stakeholder-developer.jpg',
      imageLeft: true,
      bullets: [
        'Track milestones and pending approvals',
        'Monitor commitments and project risks',
        'Review progress with clear ownership'
      ]
    },
    {
      id: 'consultants',
      title: 'For Project Consultants & PMCs',
      subtitle: 'Keep coordination and reporting moving.',
      image: '/images/stakeholder-consultants.jpg',
      imageLeft: false,
      bullets: [
        'Assign follow-ups and responsibilities',
        'Link decisions to documents and milestones',
        'Prepare consistent society and owner updates'
      ]
    },
    {
      id: 'societies',
      title: 'For Housing Societies',
      subtitle: 'Stay informed throughout redevelopment.',
      image: '/images/housing-society-meeting.jpg',
      imageLeft: true,
      bullets: [
        'Track member consent and open concerns',
        'Access notices, minutes and project records',
        'Review commitments and handover readiness'
      ]
    },
    {
      id: 'siteteams',
      title: 'For Site Engineers & Contractors',
      subtitle: 'Keep field updates connected to project decisions.',
      image: '/images/planning-handover.jpg',
      imageLeft: false,
      bullets: [
        'Record progress and site photographs',
        'Assign and track snags to closure',
        'Keep project managers informed of blockers'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] overflow-hidden bg-slate-950 pt-28 sm:pt-36 pb-16 flex items-center">
        <img
          src="/images/hero-slide-1.jpg"
          alt="Who We Serve - AAYAM Platform Stakeholders"
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
                WHO WE SERVE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Built Around the<br />
              People Behind<br />
              Every Project.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
              Connect developers, consultants, societies and site teams through one shared project journey.
            </p>

            {/* Button */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Category Bar (Below Hero) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 reveal-zoom-in">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 py-2.5 px-3 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center justify-center space-x-2 sm:space-x-3 py-2.5 px-3 rounded-xl transition-all text-xs sm:text-sm font-semibold ${
                    isActive
                      ? 'text-[#F15A24] bg-orange-50 border border-orange-200/70 shadow-sm'
                      : 'text-slate-700 hover:text-[#F15A24] hover:bg-orange-50/40 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F15A24]" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Section: Different Roles. One Connected Project. */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Different Roles. One Connected Project.
            </h2>
          </div>

          {/* 4 Alternating Role Card Boxes */}
          <div className="space-y-8 sm:space-y-12">
            {roles.map((role) => (
              <div
                key={role.id}
                id={role.id}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-orange-50/30 hover:shadow-[0_20px_40px_-10px_rgba(241,90,36,0.16)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer reveal-on-scroll"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    role.imageLeft ? 'order-1 reveal-from-left' : 'order-1 lg:order-2 reveal-from-right'
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 aspect-[16/10]">
                    <img
                      src={role.image}
                      alt={role.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                    role.imageLeft ? 'order-2 reveal-from-right' : 'order-2 lg:order-1 reveal-from-left'
                  }`}
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading tracking-tight group-hover:text-[#F15A24] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                      {role.subtitle}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-1">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F15A24] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-slate-700 font-medium">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={onBookDemo}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                    >
                      <span>Discuss your requirements</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Section: CTA Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A192F] overflow-hidden text-center text-white">
        {/* Subtle geometric watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,0 100,0 80,100 0,100" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 reveal-zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Bring Your Project Stakeholders Together.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Let us understand your workflow and show you where AAYAM fits.
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
    </div>
  );
}
