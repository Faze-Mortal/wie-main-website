import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollStore } from '../../store/useScrollStore';
import RotatingText from '../RotatingText';
import ImpactJourney from './ImpactJourney';

// Asset Imports
import wieLogo from '../../assets/wie_logo.png';
import topFlag from '../../assets/Top Flag.png';
import centreRightGlass from '../../assets/centre right Glass Break.png';
import ieeeWieText from '../../assets/IEEE WIE.png';
import bottomLeftGlass from '../../assets/bottom left Minor glass break.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';
import websiteIcon from '../../assets/website.png';

const HeroPhase = () => {
  const bgGlass1Ref = useRef(null);
  const bgGlass2Ref = useRef(null);
  const ieeeWieTextRef = useRef(null);
  const textBlockRef = useRef(null);
  const topFlagRef = useRef(null);
  const socialIconsRef = useRef(null);
  const { currentPhase } = useScrollStore();

  useGSAP(() => {
    // Only run the entry animation if this phase is active (index 0)
    if (currentPhase !== 0) return;

    const tl = gsap.timeline();

    // 1. Mirror-crack background assets fade in
    tl.to([bgGlass1Ref.current, bgGlass2Ref.current], {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
      // 2. IEEE WIE logo text reveals
      .to(ieeeWieTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.4")
      // 3. Left-side text block reveals
      .to(textBlockRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.5")
      // 4. Our Impact Journey (header + path + nodes stagger)
      .to('.impact-header', { opacity: 1, duration: 0.5, ease: 'power1.out' }, "-=0.4")
      .to('.impact-path', { opacity: 1, duration: 0.5, ease: 'power1.out' }, "-=0.2")
      .to('.impact-node', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.5)'
      }, "-=0.3")
      // 4.5 Social icons fade up
      .to(socialIconsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.2")
      // 5. Top-right flag/logo asset reveals
      .to(topFlagRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.2");

  }, [currentPhase]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Top Left: Navigation removed from here as it's now in PhaseOrchestrator */}

      {/* Top Right: Flag + Logo Banner */}
      <div ref={topFlagRef} className="absolute top-0 right-8 md:right-16 z-40 flex flex-col items-center w-20 md:w-28 opacity-0 scale-95 origin-top">
        <img
          src={topFlag}
          alt="Flag Background"
          className="absolute top-0 w-full h-auto object-cover opacity-30"
          style={{
            zIndex: 1,
            filter: 'brightness(0) saturate(100%) invert(23%) sepia(87%) saturate(2975%) hue-rotate(264deg) brightness(87%) contrast(101%)'
          }}
        />
        <img src={wieLogo} alt="WIE Logo" className="relative mt-6 md:mt-10 w-14 md:w-16 object-contain drop-shadow-lg" style={{ zIndex: 2 }} />
      </div>

      {/* Center Right: Glass Break + IEEE WIE Text */}
      <div className="absolute top-[50%] right-[5%] md:right-[10%] -translate-y-1/2 w-[60%] md:w-[45%] h-[80%] z-20 flex items-center justify-center pointer-events-none">
        <img ref={bgGlass1Ref} src={centreRightGlass} alt="Glass Break Texture" className="absolute inset-0 w-full h-full object-cover object-center scale-[1.45] origin-center opacity-0" />
        <img ref={ieeeWieTextRef} src={ieeeWieText} alt="IEEE WIE" className="relative w-[80%] max-w-xl object-contain z-10 drop-shadow-2xl translate-x-[35%] translate-y-[20%] scale-[1.3] origin-center opacity-0" />
      </div>

      {/* Bottom Left: Glass Break + Social Icons */}
      <div className="absolute bottom-0 left-0 w-[50%] md:w-[40%] min-w-[250px] h-[40%] z-20 flex items-end justify-start pointer-events-none">
        <img ref={bgGlass2Ref} src={bottomLeftGlass} alt="Glass Break Texture" className="absolute bottom-0 left-0 w-full h-full object-cover object-left-bottom scale-[1.3] origin-bottom-left drop-shadow-lg opacity-0" />
        <div ref={socialIconsRef} className="relative z-10 flex gap-3 md:gap-5 pb-6 md:pb-10 pl-6 md:pl-10 pointer-events-auto opacity-0 translate-y-4">
          <a href="#" className="hover:scale-110 transition-transform"><img src={instagramIcon} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><img src={websiteIcon} alt="Website" className="w-5 h-5 md:w-6 md:h-6" /></a>
        </div>
      </div>

      {/* Left Middle: Text Content */}
      <div ref={textBlockRef} className="absolute top-[20%] md:top-[22%] left-8 md:left-20 z-30 flex flex-col space-y-4 max-w-lg md:max-w-xl pr-8 opacity-0 -translate-x-8">
        <h1 className="text-4xl md:text-5xl font-black font-inter text-white leading-[1.1] md:leading-[1.1] tracking-tight">
          Empowering Ideas.<br />
          Inspiring <span className="text-[var(--mauve-magic,#c77dff)]">Futures.</span>
        </h1>
        <p className="text-gray-300 font-inter text-lg md:text-xl leading-relaxed">
          Exploring the fusion of technology, creativity, and empowerment.
        </p>
        <div className="text-xl md:text-2xl text-white font-inter flex items-center gap-[0.4em] z-30">
          <span className="shrink-0">I am a</span>
          <RotatingText
            texts={['Developer', 'Programmer', 'Coder', 'Woman']}
            mainClassName="text-[#e0aaff] font-bold overflow-hidden inline-flex min-w-[200px]"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </div>
      </div>

      {/* Bottom: Impact Journey Row */}
      <div className="absolute top-[55%] md:top-[52%] -left-[7%] md:-left-[15.5%] w-[112%] md:w-[124%] px-4 md:px-12 z-30 scale-90 md:scale-[0.75] origin-left">
        <ImpactJourney />
      </div>

    </div>
  );
};

export default HeroPhase;
