import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  DEFAULT_VIEWPORT,
  PREMIUM_EASE,
  revealUp,
  revealUpReduced,
} from './animationVariants';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  amount?: number;
  duration?: number;
}

const Reveal = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  amount = DEFAULT_VIEWPORT.amount,
  duration = 0.75,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  const initialTransform = {
    up: { x: 0, y: 42 },
    left: { x: -42, y: 0 },
    right: { x: 42, y: 0 },
  };

  if (shouldReduceMotion) {
    return <div className={`reveal-wrapper ${className}`.trim()}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal-wrapper ${className}`.trim()}
      initial={{
        opacity: 0,
        ...initialTransform[direction],
        filter: 'blur(5px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: PREMIUM_EASE,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

export { revealUp, revealUpReduced, PREMIUM_EASE, DEFAULT_VIEWPORT };
