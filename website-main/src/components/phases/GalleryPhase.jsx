import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import MarqueeGallery from '../MarqueeGallery';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollStore } from '../../store/useScrollStore';
import { galleryPhotos } from '../../pages/Gallery';

// Slice the first 15 photos and map to { src, alt } as expected by DomeGallery
const galleryImages = galleryPhotos.slice(0, 15).map(photo => ({
  src: photo.src,
  alt: photo.caption
}));

const GalleryPhase = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const galleryRef = useRef(null);
  const currentPhase = useScrollStore(state => state.currentPhase);

  useGSAP(() => {
    gsap.set(headingRef.current, { opacity: 0, y: 40 });
    gsap.set(galleryRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({ paused: true });
    tl.set({}, {}, 1.0);
    
    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.1 }, 0.15);
    tl.to(galleryRef.current, { opacity: 1, y: 0, duration: 0.1 }, 0.25);

    const unsubscribe = useScrollStore.subscribe((state) => {
      if (state.currentPhase === 4) {
        tl.progress(state.phaseProgress);
      } else if (state.currentPhase > 4) {
        tl.progress(1);
      } else if (state.currentPhase < 4) {
        tl.progress(0);
      }
    });

    return () => unsubscribe();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-full relative flex flex-col items-center justify-center pt-[10vh] overflow-hidden pointer-events-none">
      <div ref={headingRef} className="text-center mb-12 z-10 pt-12 lg:pt-16">
        <h2 className="text-4xl md:text-5xl font-agdasima-bold text-white uppercase drop-shadow-lg tracking-wider">Moments</h2>
      </div>

      <div ref={galleryRef} className="w-full relative pointer-events-auto flex flex-col items-center">
        <MarqueeGallery images={galleryImages} />
      </div>
    </div>
  );
};

export default GalleryPhase;
