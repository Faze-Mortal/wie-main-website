import Hero from './components/Hero';
import LatestEvents from './components/LatestEvents';
import ExploreEvents from './components/ExploreEvents';
import { useInteractiveEffects } from './lib/effects';
import "./EventPage.css";

export default function App() {
  useInteractiveEffects();

  return (
    <div className="event-page">

      <main className="page-content">
        <Hero />
        <LatestEvents />
        <ExploreEvents />
      </main>

    </div>
  );
}