import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === 'down' ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        setTimeout(onStart, delay * 1000);
      }
      setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedNumber = Intl.NumberFormat('en-US', {
          useGrouping: !!separator,
        }).format(Math.round(latest));
        
        const finalNumber = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber.replace(/,/g, '');
        
        ref.current.textContent = finalNumber;
      }
      
      if (Math.round(latest) === (direction === 'down' ? from : to)) {
        if (typeof onEnd === 'function') onEnd();
      }
    });
  }, [springValue, direction, from, to, separator, onEnd]);

  return <span className={className} ref={ref} />;
}
