import React from 'react';
import { Rocket, BookOpen, Users, Lightbulb, Trophy } from 'lucide-react';

const ImpactJourney = () => {
  const steps = [
    {
      id: 1,
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Inspire",
      desc: "Sparking curiosity and ambition.",
      left: "10%",
      top: "60%",
      textPos: "top"
    },
    {
      id: 2,
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Learn",
      desc: "Building skills for the future.",
      left: "30%",
      top: "15%",
      textPos: "bottom"
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Collaborate",
      desc: "Connecting minds, creating together.",
      left: "50%",
      top: "60%",
      textPos: "top"
    },
    {
      id: 4,
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Innovate",
      desc: "Turning ideas into real-world impact.",
      left: "70%",
      top: "15%",
      textPos: "bottom"
    },
    {
      id: 5,
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Lead",
      desc: "Empowering leaders of tomorrow.",
      left: "90%",
      top: "40%",
      textPos: "bottom"
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[220px] md:h-[280px] mt-8 md:mt-12 z-30 font-inter">
      {/* Header */}
      <div className="impact-header absolute -top-6 left-[5%] flex flex-col items-start gap-1 opacity-0">
        <h3 className="text-[#c77dff] text-xs md:text-sm font-semibold tracking-wider uppercase">
          Our Impact Journey
        </h3>
        <div className="w-8 h-[2px] bg-[#c77dff] shadow-[0_0_8px_#c77dff]"></div>
      </div>

      {/* SVG Wave */}
      <div className="impact-path absolute inset-0 w-full h-full pointer-events-none opacity-0">
        <svg 
          viewBox="0 0 1000 200" 
          preserveAspectRatio="none" 
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7b2cbf" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#c77dff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7b2cbf" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M 0,120 C 50,120 50,120 100,120 C 200,120 200,30 300,30 C 400,30 400,120 500,120 C 600,120 600,30 700,30 C 800,30 800,80 900,80 C 950,80 1000,80 1000,80" 
            fill="none" 
            stroke="url(#waveGradient)" 
            strokeWidth="3"
            filter="url(#glow)"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Nodes */}
      {steps.map((step) => (
        <div 
          key={step.id} 
          className="impact-node absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75"
          style={{ left: step.left, top: step.top }}
        >
          {step.textPos === "top" && (
            <div className="absolute bottom-[calc(100%+16px)] flex flex-col items-center min-w-[120px] text-center">
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">{step.title}</h4>
              <p className="text-gray-400 text-[10px] md:text-xs leading-tight">{step.desc}</p>
              {/* Dotted Line */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 h-3 border-l-2 border-dotted border-[#c77dff] opacity-60 mt-1"></div>
            </div>
          )}

          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/40 border border-[#c77dff] flex items-center justify-center shadow-[0_0_15px_rgba(199,125,255,0.4)] relative z-10 backdrop-blur-sm">
            {step.icon}
          </div>

          {step.textPos === "bottom" && (
            <div className="absolute top-[calc(100%+16px)] flex flex-col items-center min-w-[120px] text-center">
              {/* Dotted Line */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-3 border-l-2 border-dotted border-[#c77dff] opacity-60 mb-1"></div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">{step.title}</h4>
              <p className="text-gray-400 text-[10px] md:text-xs leading-tight">{step.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImpactJourney;
