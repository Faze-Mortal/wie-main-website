import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import SiteFooter from './components/SiteFooter';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './routes/ScrollToTop';
import wieLogo from './assets/wie_logo.png';
import Silk from './components/Silk';
import { useScrollStore } from './store/useScrollStore';

import './index.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Our Team', href: '/team' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' }
];

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const teamIntroComplete = useScrollStore(state => state.teamIntroComplete);
  const setTeamIntroComplete = useScrollStore(state => state.setTeamIntroComplete);

  useEffect(() => {
    if (location.pathname !== '/team') {
      setTeamIntroComplete(false);
    }
  }, [location.pathname, setTeamIntroComplete]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white font-tektur relative">
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        {prefersReducedMotion ? (
          <div 
            className="w-full h-full" 
            style={{ background: 'linear-gradient(to bottom right, #10002b, #3c096c)' }} 
          />
        ) : !isMobile ? (
          <Silk 
            speed={2.4} 
            scale={0.6} 
            color="#3c096c" 
            noiseIntensity={0.3} 
            rotation={0.4} 
          />
        ) : (
          <div 
            className="w-full h-full" 
            style={{ background: 'radial-gradient(circle at center, #240046, #10002b)' }} 
          />
        )}
      </div>

      <div style={{ visibility: (location.pathname === '/team' && !teamIntroComplete) ? 'hidden' : 'visible', opacity: (location.pathname === '/team' && !teamIntroComplete) ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <PillNav 
          logo={wieLogo}
          items={navItems}
          activeHref={location.pathname}
          baseColor="#10002b"
          pillColor="#3c096c"
          pillTextColor="#e0aaff"
          hoveredPillTextColor="#e0aaff"
        />
      </div>
      <main className={`flex-grow ${!isHome ? 'pt-24' : ''}`}>
        <AppRoutes />
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}