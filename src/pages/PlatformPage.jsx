import React, { useState } from 'react';
import { 
  Layers, 
  Users, 
  Coins, 
  GitFork, 
  ArrowRight, 
  HardHat, 
  Boxes, 
  Truck, 
  FileCheck2, 
  Building2, 
  FileText, 
  ClipboardCheck, 
  FileSpreadsheet, 
  Settings2, 
  BarChart3
} from 'lucide-react';

export default function PlatformPage({ onBookDemo }) {
  const [activeTab, setActiveTab] = useState('delivery');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navCategories = [
    { id: 'delivery', name: 'Delivery', icon: Layers },
    { id: 'resources', name: 'Resources', icon: Users },
    { id: 'finance', name: 'Finance', icon: Coins },
    { id: 'coordination', name: 'Coordination', icon: GitFork }
  ];

  const deliveryCards = [
    {
      title: 'Projects & Milestones',
      description: 'Assign owners, deadlines and dependencies. Track planned versus actual completion.',
      image: '/images/stakeholder-developer.jpg'
    },
    {
      title: 'Overall Project Progress',
      description: 'Bring milestone and work-package updates into a clear project-level view.',
      image: '/images/hero-slide-2.jpg'
    },
    {
      title: 'Development Analysis',
      description: 'Review stage performance, schedule variance, productivity and blockers.',
      image: '/images/stakeholder-society.jpg'
    }
  ];

  const resourceCards = [
    {
      icon: HardHat,
      title: 'Labour Management',
      description: 'Track attendance, workforce allocation, work hours and labour costs.'
    },
    {
      icon: Boxes,
      title: 'Materials & Inventory',
      description: 'Manage receipts, consumption, stock balances, transfers and low-stock alerts.'
    },
    {
      icon: Truck,
      title: 'Procurement & Vendors',
      description: 'Connect material requests, approvals, purchase orders and delivery tracking.'
    }
  ];

  const coordinationCards = [
    {
      icon: FileCheck2,
      title: 'Approvals & Follow-ups',
      description: 'Assign responsibility and track clearances, deadlines and overdue actions.'
    },
    {
      icon: Building2,
      title: 'Society & Redevelopment Coordination',
      description: 'Coordinate member consent, concerns, rent commitments and handover readiness.'
    },
    {
      icon: FileText,
      title: 'Documents & Meetings',
      description: 'Organise project records and connect meeting decisions to follow-up tasks.'
    },
    {
      icon: ClipboardCheck,
      title: 'Site Updates & Quality',
      description: 'Capture daily reports, photographs, inspections and snag closure evidence.'
    }
  ];

  const journeySteps = [
    {
      icon: FileSpreadsheet,
      title: 'Plan the work',
      description: 'Set up projects, milestones and responsibilities.'
    },
    {
      icon: Settings2,
      title: 'Arrange resources',
      description: 'Coordinate people, materials and vendors.'
    },
    {
      icon: HardHat,
      title: 'Record execution',
      description: 'Track progress, site updates and project costs.'
    },
    {
      icon: BarChart3,
      title: 'Review progress & costs',
      description: 'Stay informed and take next steps with confidence.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] overflow-hidden bg-slate-950 pt-28 sm:pt-36 pb-16 flex items-center">
        <img
          src="/images/hero-slide-1.jpg"
          alt="AAYAM Platform - Construction & Real Estate Management"
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[0.98]"
        />
        {/* Focused Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent max-w-3xl lg:max-w-4xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:hidden" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left text-white space-y-5 reveal-on-scroll">
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F15A24] uppercase drop-shadow-sm">
                PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Every Project.<br />
              Every Resource.<br />
              Every Commitment.<br />
              Connected.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
              Bring project progress, resources, costs and coordination together—from planning to handover.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={onBookDemo}
                className="px-6 sm:px-7 py-3 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                Book a Demo
              </button>

              <button
                onClick={() => scrollToSection('delivery')}
                className="px-6 sm:px-7 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white font-semibold text-sm sm:text-base border border-slate-600/80 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm text-center"
              >
                Explore Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation / Category Bar (Directly below hero) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 overflow-hidden">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 py-2.5 px-3 sm:px-6 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full">
            {navCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center justify-center space-x-1.5 sm:space-x-3 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl transition-all text-xs sm:text-sm font-semibold min-w-0 truncate ${
                    isActive
                      ? 'text-[#F15A24] bg-orange-50 border border-orange-200/70 shadow-sm'
                      : 'text-slate-700 hover:text-[#F15A24] hover:bg-orange-50/40 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F15A24] flex-shrink-0" />
                  <span className="truncate">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Section: "Plan, Track and Understand Project Delivery." */}
      <section id="delivery" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Plan, Track and Understand Project Delivery.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
              Turn plans into progress with clear visibility across every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {deliveryCards.map((card, idx) => {
              const delays = ['delay-100', 'delay-200', 'delay-300'];
              return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:border-[#F15A24] hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_20px_40px_-10px_rgba(241,90,36,0.22)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer reveal-on-scroll ${delays[idx % 3]} ${
                  idx === 2 ? 'sm:col-span-2 lg:col-span-1 w-full' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-[#F15A24] font-semibold text-xs sm:text-sm border-t border-slate-100 group-hover:border-orange-100 group-hover:bg-orange-50/60 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Section: "Keep People and Materials Moving." */}
      <section id="resources" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Keep People and Materials Moving.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
              Coordinate your workforce, materials and vendors for smooth project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {resourceCards.map((item, idx) => {
              const Icon = item.icon;
              const delays = ['delay-100', 'delay-200', 'delay-300'];
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-orange-50/20 hover:to-orange-50/40 hover:shadow-[0_16px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex items-start space-x-4 sm:space-x-5 group cursor-pointer reveal-on-scroll ${delays[idx % 3]} ${
                    idx === 2 ? 'sm:col-span-2 lg:col-span-1 w-full' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Section: "Control Costs with Clear Records." */}
      <section id="finance" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading */}
            <div className="md:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4 reveal-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                Control Costs with<br className="hidden sm:inline" /> Clear Records.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
                Manage expenses and budgets with transparency and control.
              </p>
            </div>

            {/* Middle Column: Engineer Photo */}
            <div className="md:col-span-1 lg:col-span-4 reveal-zoom-in">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-[4/3]">
                <img
                  src="/images/cost-control-engineer.jpg"
                  alt="Site engineer inspecting project plans and budgets"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: 2 Stacked Feature Cards */}
            <div className="md:col-span-1 lg:col-span-4 space-y-4 sm:space-y-5 reveal-on-scroll">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 hover:shadow-[0_14px_30px_-6px_rgba(241,90,36,0.16)] hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group cursor-pointer">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white transition-all duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    Petty Cash & Expenses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Record advances, receipts and approvals. Reconcile site cash balances.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 hover:shadow-[0_14px_30px_-6px_rgba(241,90,36,0.16)] hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group cursor-pointer">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white transition-all duration-300">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    Budgets & Cost Control
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Compare budgets, actual expenditure and committed purchase costs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section: "Connect Every Stakeholder and Decision." */}
      <section id="coordination" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Connect Every Stakeholder and Decision.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
              Bring people, information and decisions together across the project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {coordinationCards.map((item, idx) => {
              const Icon = item.icon;
              const delays = ['delay-100', 'delay-200', 'delay-150', 'delay-250'];
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-br hover:from-white hover:via-orange-50/20 hover:to-orange-50/40 hover:shadow-[0_16px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex items-start space-x-4 sm:space-x-5 group cursor-pointer reveal-on-scroll ${delays[idx % 4]}`}
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Section: "AI Assistance. Grounded in Project Information." (Banner) */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px] sm:min-h-[340px]">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 bg-[#0B1E36] px-6 sm:px-12 lg:px-16 py-10 sm:py-14 flex flex-col justify-center space-y-3.5 sm:space-y-4 text-white relative">
            <div className="w-12 h-1 bg-[#F15A24] rounded-full mb-1" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              AI Assistance. Grounded in Project Information.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Draft summaries and meeting minutes, retrieve documents and prepare project reports.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full w-full overflow-hidden">
            <img
              src="/images/planning-handover.jpg"
              alt="Engineers reviewing blueprints on site with AI assistance"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 8. Section: "One Connected Project Journey." */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              One Connected Project Journey.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
              From planning to handover, keep every dimension of your project connected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#F15A24] hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#FFF5F0] hover:shadow-[0_16px_36px_-8px_rgba(241,90,36,0.18)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer relative flex flex-col items-start overflow-hidden lg:overflow-visible reveal-on-scroll ${delays[idx % 4]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center text-[#F15A24] mb-4 group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#F15A24] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {idx < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute right-2 top-9 text-slate-300 z-10">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. Section: "See How AAYAM Fits Your Projects." */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A192F] overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 reveal-zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            See How AAYAM Fits Your Projects.
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
