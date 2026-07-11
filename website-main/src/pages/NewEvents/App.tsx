import Hero from './components/Hero';
import LatestEvents from './components/LatestEvents';
import ExploreEvents from './components/ExploreEvents';
import Silk from './components/Silk';
import { useInteractiveEffects } from './lib/effects';
import "./EventPage.css";

export default function App() {
  useInteractiveEffects();

  return (
    <div className="event-page">

      <div className="silk-background">
        <Silk
  speed={3.1}
  scale={0.5}
  color="#3c096c"
  noiseIntensity={0}
  rotation={0.46}
/>
      </div>

      <main className="page-content">
        <Hero />
        <LatestEvents />
        <ExploreEvents />
      </main>

    </div>
  );
}