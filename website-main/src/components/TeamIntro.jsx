import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import landingImg from '../assets/teams landing.png';
import { useScrollStore } from '../store/useScrollStore';

const TeamIntro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);
  const setTeamIntroComplete = useScrollStore(state => state.setTeamIntroComplete);

  useEffect(() => {
    setIsVisible(true);

    // Start the 7-second timer before triggering the exit animation
    const timer = setTimeout(() => {
      if (introRef.current) {
        gsap.to(introRef.current, {
          y: '-100%',
          duration: 0.8,
          ease: 'power3.in',
          onComplete: () => {
            setIsVisible(false); // Unmount entirely after animation finishes
            setTeamIntroComplete(true);
            if (onComplete) onComplete();
          }
        });
      }
    }, 3000);

    // Cleanup to prevent memory leaks
    return () => {
      clearTimeout(timer);
      if (introRef.current) {
        gsap.killTweensOf(introRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999]"
    >
      {/* Background image — grayscale only on THIS div */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("${landingImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)',
      }} />

      {/* Dark Scrim Overlay (~60% opacity) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Soft Radial Glow */}
        <div className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(123,44,191,0.5) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-wider drop-shadow-lg"
          style={{
            background: 'linear-gradient(to right, #ffffff, var(--mauve-magic, #c77dff))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          IEEE WIE MUJ
        </h1>
        <h2
          className="text-2xl md:text-4xl font-semibold drop-shadow-md"
          style={{ color: 'var(--mauve-magic, #c77dff)' }}
        >
          Meet Our Team
        </h2>
      </div>
    </div>
  );
};

export default TeamIntro;
