import React, { useEffect, useRef, useState } from 'react';
import { useScrollStore } from '../store/useScrollStore';
import Silk from './Silk';
import HeroPhase from './phases/HeroPhase';
import AboutPhase from './phases/AboutPhase';
import EventsPhase from './phases/EventsPhase';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import BlogsPhase from './phases/BlogsPhase';
import GalleryPhase from './phases/GalleryPhase';
import PillNav from './PillNav';
import wieLogo from '../assets/wie_logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Our Team', href: '/team' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' }
];

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
  
  const phaseRefs = useRef([]);
  const tlRef = useRef(null);
  const pillNavRef = useRef(null);

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

    // 4. PillNav Positioning and Animation
    if (pillNavRef.current) {
      if (currentPhase === 0) {
        // Stays top-left throughout Hero phase
        gsap.set(pillNavRef.current, { left: '2rem', xPercent: 0, scale: 1 });
      } else if (currentPhase === 1) {
        // Moves to center AFTER the entry crossfade (0.15 -> 0.35)
        tl.fromTo(pillNavRef.current, 
          { left: '2rem', xPercent: 0 }, 
          { left: '50%', xPercent: -50, duration: 0.20, ease: 'power2.out' }, 
          0.15
        );
        // Pop animation concurrently with the move
        tl.fromTo(pillNavRef.current, 
          { scale: 0.9 }, 
          { scale: 1, duration: 0.20, ease: 'back.out(1.5)' }, 
          0.15
        );
      } else {
        // Already centered for phases 2 and beyond
        gsap.set(pillNavRef.current, { left: '50%', xPercent: -50 });
        
        // Quick standalone pop animation on phase entry (removed clearProps: 'scale' to prevent GSAP from stripping xPercent)
        gsap.fromTo(pillNavRef.current, 
          { scale: 0.9 }, 
          { scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
        );
      }
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
  
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    return () => {
      console.time('PhaseOrchestrator unmount');
      // Adding a synchronous wait just in case to ensure we capture the whole teardown phase,
      // but standard console.time/timeEnd around the unmount should give us a good idea.
      if (pillNavRef.current) {} // just a dummy
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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

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

  return (
    <>
      <div 
        style={{ height: `${PHASES.length * 200}vh`, width: '1px', pointerEvents: 'none' }} 
        aria-hidden="true" 
      />
      
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {prefersReducedMotion ? (
          <div 
            className="w-full h-full" 
            style={{ background: 'linear-gradient(to bottom right, #10002b, #3c096c)' }} 
          />
        ) : !isMobile ? (
          <Silk 
            speed={2.4} 
            scale={0.6} 
            color="#3c096c" 
            noiseIntensity={0.3} 
            rotation={0.4} 
          />
        ) : (
          <div 
            className="w-full h-full" 
            style={{ background: 'radial-gradient(circle at center, #240046, #10002b)' }} 
          />
        )}
      </div>

      <div 
        ref={pillNavRef} 
        className="fixed z-[60] pointer-events-auto"
        style={{ top: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
         <PillNav 
            logo={wieLogo}
            items={navItems}
            activeHref="/"
            baseColor="#10002b"
            pillColor="#3c096c"
            pillTextColor="#e0aaff"
            hoveredPillTextColor="#e0aaff"
         />
      </div>

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
