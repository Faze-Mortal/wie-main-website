import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './routes/ScrollToTop';

import './index.css';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-tektur">
      {/* Only render Header and Footer on non-homepage routes */}
      {!isHome && <Header />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!isHome && <Footer />}
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
