import React, { useEffect, useRef, useState } from 'react';
import { useScrollStore } from '../store/useScrollStore';
import HeroPhase from './phases/HeroPhase';
import AboutPhase from './phases/AboutPhase';
import EventsPhase from './phases/EventsPhase';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import BlogsPhase from './phases/BlogsPhase';
import GalleryPhase from './phases/GalleryPhase';

// PhaseOrchestrator owns the master list of phases
const PHASES = [
  HeroPhase,
  AboutPhase,
  EventsPhase,
  BlogsPhase,
  GalleryPhase
];

const PhaseOrchestrator = () => {
  const currentPhase = useScrollStore(state => state.currentPhase);
  const setCurrentPhase = useScrollStore(state => state.setCurrentPhase);
  const setPhaseProgress = useScrollStore(state => state.setPhaseProgress);
  const isScrollLocked = useScrollStore(state => state.isScrollLocked);
  const rafRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const phaseRefs = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }

    const prev = phaseRefs.current[currentPhase - 1];
    const current = phaseRefs.current[currentPhase];
    const next = phaseRefs.current[currentPhase + 1];

    // Ensure correct stacking order
    if (prev) gsap.set(prev, { zIndex: 0 });
    if (current) gsap.set(current, { zIndex: 10 });
    if (next) gsap.set(next, { zIndex: 20 });

    const tl = gsap.timeline({ paused: true });

    // 1. Enter transition (0.0 to 0.15)
    if (prev && current) {
      tl.fromTo(prev, { opacity: 0.5, scale: 0.98 }, { opacity: 0, scale: 0.96, duration: 0.15, ease: 'none' }, 0);
      tl.fromTo(current, { opacity: 0.5, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.15, ease: 'none' }, 0);
    } else if (current) {
      tl.fromTo(current, { opacity: 1, scale: 1 }, { opacity: 1, scale: 1, duration: 0.15, ease: 'none' }, 0);
    }

    // 2. Hold (0.15 to 0.85) - implicit in GSAP timeline

    // 3. Exit transition (0.85 to 1.0)
    if (current && next) {
      tl.fromTo(current, { opacity: 1, scale: 1 }, { opacity: 0.5, scale: 0.98, duration: 0.15, ease: 'none' }, 0.85);
      tl.fromTo(next, { opacity: 0, scale: 0.96 }, { opacity: 0.5, scale: 0.98, duration: 0.15, ease: 'none' }, 0.85);
    } else if (current) {
      // Last phase fades out completely to reveal the static footer underneath
      tl.fromTo(current, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.98, duration: 0.15, ease: 'none' }, 0.85);
    }

    tlRef.current = tl;
    tl.progress(useScrollStore.getState().phaseProgress);

    // Subscribe to phaseProgress directly from Zustand to avoid re-rendering PhaseOrchestrator on every frame
    const unsubscribe = useScrollStore.subscribe((state) => {
      if (tlRef.current) {
        tlRef.current.progress(state.phaseProgress);
      }
    });

    return () => unsubscribe();
  }, [currentPhase]);


  useEffect(() => {
    return () => {
      console.time('PhaseOrchestrator unmount');
      // Adding a synchronous wait just in case to ensure we capture the whole teardown phase,
      // but standard console.time/timeEnd around the unmount should give us a good idea.
      console.timeEnd('PhaseOrchestrator unmount');
    };
  }, []);

  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isScrollLocked]);

  useEffect(() => {
    if (PHASES.length === 0) return;

    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    const onScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const maxScroll = Math.max(0, documentHeight - windowHeight);
      const progress = maxScroll > 0 ? clamp(scrollY / maxScroll, 0, 1) : 0;

      const phaseCount = PHASES.length;
      const phaseThreshold = 1 / phaseCount;

      let newPhase = Math.floor(progress / phaseThreshold);
      if (newPhase >= phaseCount) newPhase = phaseCount - 1;
      if (newPhase < 0) newPhase = 0;

      let localProgress = (progress % phaseThreshold) / phaseThreshold;

      // Strict clamping for the very edges
      if (progress === 1) localProgress = 1;
      if (progress === 0) localProgress = 0;

      setCurrentPhase(newPhase);
      setPhaseProgress(localProgress);

      rafRef.current = requestAnimationFrame(onScroll);
    };

    rafRef.current = requestAnimationFrame(onScroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [setCurrentPhase, setPhaseProgress]);

  const ActivePhaseComponent = PHASES[currentPhase];

  if (isMobile) {
    return (
      <div className="flex flex-col w-full h-auto overflow-hidden">
        {PHASES.map((PhaseComponent, index) => (
          <div key={index} className="w-full relative min-h-[100dvh]">
            <PhaseComponent />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        style={{ height: `${PHASES.length * 200}vh`, width: '1px', pointerEvents: 'none' }}
        aria-hidden="true"
      />

      <div className="fixed inset-0 w-full h-full overflow-hidden">
        {PHASES.map((PhaseComponent, index) => {
          const isMounted = Math.abs(index - currentPhase) <= 1; // Mount N-1, N, N+1

          if (!isMounted) return null;

          return (
            <div
              key={index}
              ref={(el) => (phaseRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full"
              inert={currentPhase !== index ? true : undefined}
              style={{
                pointerEvents: currentPhase === index ? 'auto' : 'none',
                opacity: 0, // GSAP fromTo takes over immediately
              }}
            >
              <PhaseComponent />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PhaseOrchestrator;
