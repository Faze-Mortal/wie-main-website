import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ id = "tsparticles", color = "#c77dff" }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const particlesInit = useCallback(async engine => {
    // loadSlim is a smaller bundle than loadFull, containing only core shapes/animations
    await loadSlim(engine);
  }, []);

  if (reducedMotion) return null;

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="absolute inset-0 pointer-events-none z-0"
      options={{
        fullScreen: { enable: false }, // Critical so it restricts to parent absolute positioning
        fpsLimit: 60,
        particles: {
          color: {
            value: color,
          },
          links: {
            enable: false, // Sparse dots only, no linking web
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20, // Sparse density
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
