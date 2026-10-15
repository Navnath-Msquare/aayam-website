import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function HeroSlider({ onBookDemo }) {
  const slides = [
    {
      id: 1,
      image: '/images/hero-slide-1.jpg',
      tag: 'CONSTRUCTION & REAL ESTATE MANAGEMENT',
      title: 'Bring Every Project Dimension Together.',
      subtitle: 'Every Dimension. Connected.',
      description: 'Connect people, approvals, progress and commitments—from planning to handover.',
      location: 'Active High-Rise Enclave'
    },
    {
      id: 2,
      image: '/images/hero-slide-2.jpg',
      tag: 'REDEVELOPMENT & TOWNSHIP GOVERNANCE',
      title: 'Complete Visibility From Blueprint to Reality.',
      subtitle: 'Streamlined Stakeholder Sync.',
      description: 'Coordinate architects, societies, contractors, and approvals on a single unified canvas.',
      location: 'Integrated Urban Township'
    },
    {
      id: 3,
      image: '/images/hero-slide-3.jpg',
      tag: 'PRECISION MONITORING & AUDIT TRAILS',
      title: 'Zero Delays. Absolute Accountability.',
      subtitle: 'Every Commitment Delivered.',
      description: 'Accelerate municipal sanctions, track snags live on-site, and keep your timelines foolproof.',
      location: 'Mixed-Use Commercial Hub'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] overflow-hidden bg-slate-950 pt-28 sm:pt-36 pb-16 flex items-center">
      
      {/* Slides Background Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image - Crisp, Original & Gadad (Deep colors, no zoom blur) */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[0.98]"
            />

            {/* Focused Left Gradient: Preserves full original clarity of building & skyline while ensuring text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent max-w-3xl lg:max-w-4xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:hidden" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left text-white space-y-4 sm:space-y-6">
          
          {/* Category Tag */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest text-[#F15A24] uppercase drop-shadow-sm">
              {slides[currentSlide].tag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
            Bring Every<br />
            Project Dimension<br />
            Together.
          </h1>

          {/* Subtitle & Paragraph */}
          <div className="space-y-1.5 sm:space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-sm">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal max-w-xl leading-relaxed drop-shadow-sm">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onBookDemo}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
            >
              Book a Demo
            </button>

            <a
              href="#dimensions"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white font-semibold text-sm sm:text-base border border-slate-600/80 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm text-center"
            >
              Explore AAYAM
            </a>
          </div>

        </div>
      </div>

      {/* Slider Controls: Prev/Next & Dots */}
      <div className="absolute z-20 bottom-4 sm:bottom-8 right-4 sm:right-12 flex items-center gap-2 sm:gap-4">
        {/* Slide Counter */}
        <div className="hidden sm:flex items-center text-xs font-mono text-slate-300 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-white font-bold">0{currentSlide + 1}</span>
          <span className="mx-1 text-slate-500">/</span>
          <span>0{slides.length}</span>
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide Indicators (Bottom Left / Center) */}
      <div className="absolute z-20 bottom-4 sm:bottom-8 left-4 sm:left-8 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-6 sm:w-8 bg-[#F15A24]'
                : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
