import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import PillNav from './components/PillNav';
import SiteFooter from './components/SiteFooter';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './routes/ScrollToTop';
import wieLogo from './assets/wie_logo.png';

import './index.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Our Team', href: '/team' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' }
];

function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-tektur">
      <PillNav 
        logo={wieLogo}
        items={navItems}
        activeHref={location.pathname}
        baseColor="#10002b"
        pillColor="#3c096c"
        pillTextColor="#e0aaff"
        hoveredPillTextColor="#e0aaff"
      />
      <main className="flex-grow">
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
