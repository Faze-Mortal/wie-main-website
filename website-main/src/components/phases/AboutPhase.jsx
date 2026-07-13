import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollStore } from '../../store/useScrollStore';
import TiltedInfoCard from '../TiltedInfoCard';

const AboutPhase = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useGSAP(() => {
    // Initial setup: cards are 0 opacity, translated off to the side and slightly down
    gsap.set(card1Ref.current, { opacity: 0, x: -60, y: 20 });
    gsap.set(card2Ref.current, { opacity: 0, x: 60, y: 20 });
    gsap.set(card3Ref.current, { opacity: 0, x: -60, y: 20 });

    const tl = gsap.timeline({ paused: true });

    // Force the timeline to be exactly 1 second long so phaseProgress 0->1 maps 1:1
    tl.set({}, {}, 1.0);

    // Cards stagger in to be more noticeable and deliberate, animating opacity and translation
    tl.to(card1Ref.current, { opacity: 1, x: 0, y: 0, duration: 0.07 }, 0.15);
    tl.to(card2Ref.current, { opacity: 1, x: 0, y: 0, duration: 0.07 }, 0.30);
    tl.to(card3Ref.current, { opacity: 1, x: 0, y: 0, duration: 0.07 }, 0.45);

    // This internal timeline scrubs through phaseProgress strictly during Phase 1
    const unsubscribe = useScrollStore.subscribe((state) => {
      if (state.currentPhase === 1) {
        tl.progress(state.phaseProgress);
      } else if (state.currentPhase > 1) {
        tl.progress(1);
      } else if (state.currentPhase < 1) {
        tl.progress(0);
      }
    });

    return () => unsubscribe();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold font-agdasima-bold text-white uppercase tracking-wider">
          IEEE Women in Engineering
        </h2>
        <p className="text-xl md:text-2xl text-purple-200 font-tomorrow-medium mt-2">
          Advancing Technology for Humanity
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
        <div ref={card1Ref} className="w-full max-w-sm">
          <TiltedInfoCard
            title="About WIE"
            text="A global community dedicated to empowering women in engineering and technology by fostering innovation, leadership, and meaningful professional connections."
            background="linear-gradient(135deg, var(--dark-amethyst-2, #10002b) 0%, var(--indigo-velvet, #3c096c) 100%)"
            cardWidth="100%"
            cardHeight="240px"
            containerHeight="260px"
          />
        </div>

        <div ref={card2Ref} className="w-full max-w-sm">
          <TiltedInfoCard
            title="IEEE's Vision"
            text="To inspire, support, and empower women in technical fields by fostering professional growth, meaningful connections, and lifelong learning."
            background="linear-gradient(135deg, var(--indigo-ink, #0b001a) 0%, var(--royal-violet, #7b2cbf) 100%)"
            cardWidth="100%"
            cardHeight="240px"
            containerHeight="260px"
          />
        </div>

        <div ref={card3Ref} className="w-full max-w-sm">
          <TiltedInfoCard
            title="IEEE WIE MUJ"
            text="Building an inclusive community at MUJ that empowers aspiring engineers through impactful events, mentorship, technical learning, and collaborative opportunities."
            background="linear-gradient(135deg, var(--indigo-velvet, #3c096c) 0%, var(--mauve-magic, #c77dff) 100%)"
            cardWidth="100%"
            cardHeight="240px"
            containerHeight="260px"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPhase;
