import React from 'react';
import { 
  ClipboardCheck, 
  FileCheck, 
  Users2, 
  FileText, 
  HardHat, 
  Sparkles 
} from 'lucide-react';

export default function DimensionsGrid({ onSelectFeature }) {
  const dimensions = [
    {
      id: 'milestones',
      icon: ClipboardCheck,
      title: 'Projects & Milestones',
      description: 'Plan, track and keep commitments on schedule.'
    },
    {
      id: 'approvals',
      icon: FileCheck,
      title: 'Approvals & Follow-ups',
      description: 'Manage approvals and keep follow-ups moving.'
    },
    {
      id: 'society',
      icon: Users2,
      title: 'Society Coordination',
      description: 'Engage and communicate with all stakeholders.'
    },
    {
      id: 'documents',
      icon: FileText,
      title: 'Documents & Records',
      description: 'Organize and access project information.'
    },
    {
      id: 'snags',
      icon: HardHat,
      title: 'Site Updates & Snags',
      description: 'Capture site updates and close snags efficiently.'
    },
    {
      id: 'ai',
      icon: Sparkles,
      title: 'AI Secretary',
      description: 'Get timely support and intelligent assistance.'
    }
  ];

  return (
    <section id="dimensions" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
            Every Dimension of Your Project.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
            Modular software modules designed to eliminate information silos across construction lifecycle.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {dimensions.map((item, idx) => {
            const Icon = item.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-150', 'delay-250', 'delay-350'];
            return (
              <div
                key={item.id}
                onClick={() => onSelectFeature && onSelectFeature(item)}
                className={`bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-orange-50/20 hover:to-orange-50/40 hover:shadow-[0_16px_36px_-8px_rgba(241,90,36,0.18)] transition-all duration-300 flex items-start space-x-4 sm:space-x-5 cursor-pointer transform hover:-translate-y-1.5 group reveal-on-scroll ${delays[idx % 6]}`}
              >
                {/* Orange Icon Container */}
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
