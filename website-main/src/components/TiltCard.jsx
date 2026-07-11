import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ imageSrc, title, date }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded-2xl bg-gradient-to-br from-[var(--dark-amethyst-2,#1a0b2e)] via-[var(--indigo-velvet,#3b1b60)] to-[var(--royal-violet,#7b2cbf)] border border-[var(--royal-violet,#7b2cbf)] shadow-[0_0_35px_rgba(123,44,191,0.12)] hover:shadow-[0_0_40px_rgba(199,125,255,0.6)] transition-shadow duration-300 flex w-full h-full"
    >
      <div
        style={{
          transform: "translateZ(50px)",
        }}
        className="absolute inset-2 md:inset-3"
      >
        <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Gradient Scrim for Text Visibility */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-[#0b001a] via-[#0b001a]/80 to-transparent flex flex-col justify-end">
          <h3 className="text-lg md:text-2xl font-bold font-agdasima-bold text-white uppercase tracking-wider leading-tight">{title}</h3>
          <p className="text-[var(--mauve-magic,#c77dff)] font-tomorrow-medium mt-1 md:text-lg">{date}</p>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
