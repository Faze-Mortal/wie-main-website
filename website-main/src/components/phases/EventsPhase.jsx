import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollStore } from '../../store/useScrollStore';
import TiltCard from '../TiltCard';

const events = [
  { id: 101, title: "The Deal Room", date: "11 February", imageSrc: "/Events/dealroom.webp", aspectRatio: "1/1.414" },
  { id: 2, title: "HerVerdict", date: "11 February", imageSrc: "/Events/herverdict.webp", aspectRatio: "1/1.414" },
  { id: 1, title: "Crown Conquest", date: "13 March", imageSrc: "/Events/crownconquest.webp", aspectRatio: "1/1.414" },
  { id: 3, title: "VisionIAS", date: "11 February", imageSrc: "/Events/visionias.webp", aspectRatio: "4/5" },
  { id: 100, title: "Swara", date: "10 February", imageSrc: "/Events/swara.webp", aspectRatio: "1/1.414" }
];

const EventsPhase = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 768) {
      gsap.set([headingRef.current, card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current, card5Ref.current], { opacity: 1, y: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: 40 });
    gsap.set(card1Ref.current, { opacity: 0, y: 100 });
    gsap.set(card2Ref.current, { opacity: 0, y: 100 });
    gsap.set(card3Ref.current, { opacity: 0, y: 100 });
    gsap.set(card4Ref.current, { opacity: 0, y: 100 });
    gsap.set(card5Ref.current, { opacity: 0, y: 100 });

    const tl = gsap.timeline({ paused: true });
    tl.set({}, {}, 1.0); // 1-second timeline mapped to 0-1 progress

    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.05 }, 0.10);
    
    // Fade/slide in each card's outer wrapper staggered
    tl.to(card1Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.15);
    tl.to(card2Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.30);
    tl.to(card3Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.45);
    tl.to(card4Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.60);
    tl.to(card5Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.75);

    const unsubscribe = useScrollStore.subscribe((state) => {
      if (state.currentPhase === 2) {
        tl.progress(state.phaseProgress);
      } else if (state.currentPhase > 2) {
        tl.progress(1);
      } else if (state.currentPhase < 2) {
        tl.progress(0);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Center the carousel on the middle card (Crown Conquest) by default on mobile
    if (containerRef.current && card3Ref.current) {
      const container = containerRef.current;
      const centerCard = card3Ref.current;
      if (window.innerWidth < 768) {
        container.scrollLeft = centerCard.offsetLeft - (container.clientWidth / 2) + (centerCard.clientWidth / 2);
      }
    }
  }, []);

  return (
    <div className="w-full min-h-[100dvh] md:h-full flex flex-col items-center p-8 lg:p-20 overflow-hidden md:overflow-hidden">
      <div ref={headingRef} className="text-center mb-8 md:mb-12 relative z-10 pt-12 lg:pt-16">
        <h2 className="text-5xl md:text-6xl font-bold font-agdasima-bold text-white uppercase tracking-wider">
          Recent Events
        </h2>
      </div>
      
      <div ref={containerRef} className="w-full max-w-7xl flex-1 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10 md:gap-3 lg:gap-6 py-12 min-h-0 md:overflow-x-auto md:overflow-y-hidden md:[&::-webkit-scrollbar]:hidden">
        <div ref={card1Ref} className="w-[82vw] h-auto md:h-full md:max-h-full md:w-auto md:max-w-[17%] shrink-0" style={{ aspectRatio: events[0].aspectRatio }}>
          <TiltCard {...events[0]} />
        </div>
        <div ref={card2Ref} className="w-[82vw] h-auto md:h-full md:max-h-full md:w-auto md:max-w-[17%] shrink-0" style={{ aspectRatio: events[1].aspectRatio }}>
          <TiltCard {...events[1]} />
        </div>
        <div ref={card3Ref} className="w-[82vw] h-auto md:h-full md:max-h-full md:w-auto md:max-w-[17%] shrink-0" style={{ aspectRatio: events[2].aspectRatio }}>
          <TiltCard {...events[2]} />
        </div>
        <div ref={card4Ref} className="w-[82vw] h-auto md:h-full md:max-h-full md:w-auto md:max-w-[17%] shrink-0" style={{ aspectRatio: events[3].aspectRatio }}>
          <TiltCard {...events[3]} />
        </div>
        <div ref={card5Ref} className="w-[82vw] h-auto md:h-full md:max-h-full md:w-auto md:max-w-[17%] shrink-0" style={{ aspectRatio: events[4].aspectRatio }}>
          <TiltCard {...events[4]} />
        </div>
      </div>
    </div>
  );
};

export default EventsPhase;
