import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [stage, setStage] = useState('entering'); // 'entering' -> 'active' -> 'exiting' -> 'finished'
  const [progress, setProgress] = useState(0);

  // 12 Architectural Column Lines with staggered speeds and delays
  const columns = [
    { left: '6%', delay: '0.1s', duration: '2.8s', color: 'from-[#F15A24]/60 to-transparent', height: 'h-48' },
    { left: '14%', delay: '0.8s', duration: '3.4s', color: 'from-orange-400/40 to-transparent', height: 'h-64' },
    { left: '22%', delay: '0.3s', duration: '2.6s', color: 'from-cyan-400/30 to-transparent', height: 'h-52' },
    { left: '30%', delay: '1.2s', duration: '3.8s', color: 'from-[#F15A24]/70 to-transparent', height: 'h-72' },
    { left: '38%', delay: '0.5s', duration: '3.0s', color: 'from-white/30 to-transparent', height: 'h-56' },
    { left: '46%', delay: '1.5s', duration: '3.5s', color: 'from-[#F15A24]/50 to-transparent', height: 'h-80' },
    { left: '54%', delay: '0.2s', duration: '2.7s', color: 'from-orange-400/60 to-transparent', height: 'h-60' },
    { left: '62%', delay: '0.9s', duration: '3.2s', color: 'from-cyan-400/30 to-transparent', height: 'h-72' },
    { left: '70%', delay: '0.4s', duration: '2.9s', color: 'from-[#F15A24]/70 to-transparent', height: 'h-52' },
    { left: '78%', delay: '1.3s', duration: '3.6s', color: 'from-white/40 to-transparent', height: 'h-64' },
    { left: '86%', delay: '0.7s', duration: '3.1s', color: 'from-orange-400/50 to-transparent', height: 'h-48' },
    { left: '94%', delay: '1.0s', duration: '3.3s', color: 'from-[#F15A24]/60 to-transparent', height: 'h-68' },
  ];

  useEffect(() => {
    // Stage 1: Active animation start
    const timer1 = setTimeout(() => {
      setStage('active');
    }, 60);

    // Smooth progress bar fill
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 55);

    // Stage 2: Begin exit transition at ~1.7s
    const exitTimer = setTimeout(() => {
      setStage('exiting');
    }, 1750);

    // Stage 3: Complete & unmount
    const finishTimer = setTimeout(() => {
      setStage('finished');
      if (onFinish) onFinish();
    }, 2250);

    return () => {
      clearTimeout(timer1);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (stage === 'finished') return null;

  return (
    <div
      onClick={() => {
        setStage('exiting');
        setTimeout(() => {
          setStage('finished');
          if (onFinish) onFinish();
        }, 350);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#050C18] via-[#091527] to-[#030710] select-none transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
        stage === 'exiting'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Animated Architectural Columns Rising from Bottom to Top */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="absolute top-0 bottom-0 w-[1px] bg-white/[0.04]"
            style={{ left: col.left }}
          >
            {/* Glowing Beam Moving Upwards from Bottom to Top */}
            <div
              className={`absolute left-0 w-[2px] ${col.height} bg-gradient-to-t ${col.color} rounded-full filter blur-[0.5px] animate-column-rise`}
              style={{
                animationDelay: col.delay,
                animationDuration: col.duration,
              }}
            />
          </div>
        ))}
      </div>

      {/* 2. Soft Ambient Radial Light Aura Behind Logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Core Orange Radiance */}
        <div
          className={`w-[400px] sm:w-[580px] h-[400px] sm:h-[580px] rounded-full bg-[#F15A24]/18 blur-[100px] transition-all duration-1000 transform ${
            stage === 'active' ? 'scale-115 opacity-100' : 'scale-90 opacity-40'
          }`}
        />
        {/* Subtle Cyan Edge Accent */}
        <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-cyan-500/10 blur-[120px] -translate-y-8" />
        
        {/* Architectural Horizontal Floor Marker Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[size:100%_4rem] pointer-events-none" />
      </div>

      {/* 3. Main Center Content: Free-floating Logo (No Card / No Box Background) */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full text-center">
        
        {/* Logo with 3D Pop & Fiery Backlight */}
        <div
          className={`relative transition-all duration-700 cubic-bezier(0.16,1,0.3,1) transform ${
            stage === 'entering'
              ? 'opacity-0 scale-80 -translate-y-6'
              : stage === 'active'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-110 translate-y-2'
          }`}
        >
          <img
            src="/AayamLogoWhite.png"
            alt="AAYAM - Every Dimension. Connected."
            className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_12px_32px_rgba(241,90,36,0.5)] drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        </div>

        {/* Minimal Glowing Progress Bar (No titles/subtitles) */}
        <div
          className={`mt-10 sm:mt-12 w-44 sm:w-56 transition-all duration-700 delay-150 ${
            stage === 'active' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-1.5 w-full bg-slate-900/90 rounded-full overflow-hidden border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-[#F15A24] to-orange-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(241,90,36,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 font-mono tracking-wider">
            <span className="text-slate-400">INITIALIZING</span>
            <span className="text-[#F15A24] font-bold">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Subtle Bottom Note */}
      <div className="absolute bottom-6 text-center text-xs text-slate-400 font-medium tracking-wide">
        <span>Click anywhere to enter</span>
      </div>
    </div>
  );
}
