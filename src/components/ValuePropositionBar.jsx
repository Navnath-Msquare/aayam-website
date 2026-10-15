import React from 'react';
import { Users, GitFork, BarChart3 } from 'lucide-react';

export default function ValuePropositionBar() {
  const highlights = [
    {
      icon: Users,
      title: 'Clear ownership',
      description: 'Define roles and keep accountability on track.'
    },
    {
      icon: GitFork,
      title: 'Connected workflows',
      description: 'Bring people, approvals and information together.'
    },
    {
      icon: BarChart3,
      title: 'Project visibility',
      description: 'Track progress and address what matters.'
    }
  ];

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-6 lg:p-7 reveal-zoom-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300'];
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl border border-slate-100 hover:border-[#F15A24] bg-white hover:bg-gradient-to-br hover:from-white hover:via-orange-50/20 hover:to-orange-50/40 hover:shadow-[0_12px_28px_-6px_rgba(241,90,36,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-start space-x-4 reveal-on-scroll ${delays[idx % 3]}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:bg-[#F15A24] group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
