import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollStore } from '../../store/useScrollStore';
import CardSwap, { Card } from '../CardSwap';

import { blogData } from '../../pages/Blog';

const blogs = [...blogData]
  .sort((a, b) => b.id - a.id)
  .slice(0, 3)
  .map(b => ({
    id: b.id,
    title: b.title,
    excerpt: b.excerpt,
    imageSrc: b.imageUrl,
    readMoreUrl: b.readMoreUrl
  }));

const BlogsPhase = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardSwapRef = useRef(null);
  const currentPhase = useScrollStore(state => state.currentPhase);

  useGSAP(() => {
    gsap.set(headingRef.current, { opacity: 0, y: 40 });
    gsap.set(cardSwapRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({ paused: true });
    // Force the timeline to be exactly 1 second long so phaseProgress 0->1 maps 1:1
    tl.set({}, {}, 1.0);
    
    // Reveal within the 0.15-0.85 hold window
    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.1 }, 0.15);
    tl.to(cardSwapRef.current, { opacity: 1, y: 0, duration: 0.1 }, 0.25);

    const unsubscribe = useScrollStore.subscribe((state) => {
      if (state.currentPhase === 3) {
        tl.progress(state.phaseProgress);
      } else if (state.currentPhase > 3) {
        tl.progress(1);
      } else if (state.currentPhase < 3) {
        tl.progress(0);
      }
    });

    return () => unsubscribe();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-full relative flex flex-col md:flex-row items-center justify-between p-8 lg:p-20 overflow-hidden">
      
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center h-full">
        <div ref={headingRef} className="flex flex-col space-y-4 max-w-lg md:max-w-xl pr-8">
          <h2 className="text-5xl md:text-7xl font-bold font-agdasima-bold text-white uppercase tracking-wider leading-[1.1]">
            Our Blogs
          </h2>
          <h3 className="text-2xl md:text-3xl text-[var(--mauve-magic,#c77dff)] font-agdasima-bold uppercase tracking-wide">
            Where curiosity meets innovation.
          </h3>
          <p className="text-gray-300 font-inter text-lg md:text-xl leading-relaxed">
            Discover thought provoking articles by IEEE WIE members on technology, research, engineering, and the ideas shaping tomorrow.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full relative pointer-events-none flex items-center justify-center">
        <div ref={cardSwapRef} className="pointer-events-auto relative w-full flex items-center justify-center [&_.card-swap-container]:!relative [&_.card-swap-container]:!transform-none [&_.card-swap-container]:!bottom-auto [&_.card-swap-container]:!right-auto mt-24 md:mt-32">
          <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={true}
              width={480}
              height={320}
              easing="linear"
            >
              {blogs.map((blog) => (
                <Card 
                  key={blog.id} 
                  className="relative flex flex-col justify-end bg-[var(--indigo-ink,#0b001a)] border border-[var(--royal-violet,#7b2cbf)] shadow-[0_0_20px_rgba(123,44,191,0.4)] overflow-hidden !p-0"
                >
                  <a 
                    href={blog.readMoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-30" 
                    aria-label={`Read ${blog.title}`}
                  />
                  {/* Background Image */}
                  <img src={blog.imageSrc} alt={blog.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b001a] via-[#0b001a]/60 to-transparent z-10" />
                  
                  {/* Content */}
                  <div className="relative z-20 p-6 pt-12">
                    <h3 className="text-3xl font-agdasima-bold text-white uppercase leading-tight mb-2 drop-shadow-md">{blog.title}</h3>
                    <p className="text-gray-200 font-tomorrow-medium text-[15px] leading-relaxed drop-shadow-sm">{blog.excerpt}</p>
                  </div>
                </Card>
              ))}
          </CardSwap>
        </div>
      </div>

    </div>
  );
};

export default BlogsPhase;
