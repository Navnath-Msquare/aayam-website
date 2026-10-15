import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StakeholdersSection({ onSelectStakeholder }) {
  const stakeholders = [
    {
      id: 'developers',
      title: 'Developers',
      description: 'Oversee milestones, commitments and project risks.',
      image: '/images/stakeholder-developer.jpg',
      badge: 'Executive Command'
    },
    {
      id: 'consultants',
      title: 'Project Consultants',
      description: 'Coordinate teams, documents and follow-ups.',
      image: '/images/stakeholder-consultants.jpg',
      badge: 'Technical Precision'
    },
    {
      id: 'societies',
      title: 'Housing Societies',
      description: 'Stay informed throughout redevelopment.',
      image: '/images/stakeholder-society.jpg',
      badge: 'Transparent Progress'
    }
  ];

  return (
    <section id="stakeholders" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
            Clarity for Every Stakeholder.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
            Tailored digital interfaces built specifically for real estate developers, architects, and society members.
          </p>
        </div>

        {/* 3 Stakeholder Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stakeholders.map((item, idx) => {
            const delays = ['delay-100', 'delay-200', 'delay-300'];
            return (
            <div
              key={item.id}
              onClick={() => onSelectStakeholder && onSelectStakeholder(item)}
              className={`group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:border-[#F15A24] hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_20px_40px_-10px_rgba(241,90,36,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 reveal-on-scroll ${delays[idx % 3]} ${
                idx === 2 ? 'sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto sm:mx-0 w-full' : ''
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm group-hover:bg-[#F15A24] group-hover:text-white transition-colors duration-300">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Orange Arrow Link & Hover Footer */}
              <div className="px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-[#F15A24] font-semibold text-xs sm:text-sm border-t border-slate-100 group-hover:border-orange-100 group-hover:bg-orange-50/60 transition-colors">
                <span>Explore Workflow</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
