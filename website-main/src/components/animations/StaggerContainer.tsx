import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { PREMIUM_EASE, SCROLL_VIEWPORT } from './animationVariants';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  variants?: Variants;
  amount?: number;
}

const StaggerContainer = ({
  children,
  className = '',
  stagger = 0.09,
  delayChildren = 0,
  variants,
  amount = SCROLL_VIEWPORT.amount,
}: StaggerContainerProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants =
    variants ?? {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren,
        },
      },
    };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
      transition={{ ease: PREMIUM_EASE }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
