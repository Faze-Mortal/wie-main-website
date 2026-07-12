import React from 'react';
import './Events/events-style.css';
import EventsPageHero from './Events/EventsPageHero';
import LatestEvents from './Events/LatestEvents';
import ExploreEvents from './Events/ExploreEvents';

export default function Events() {
  return (
    <div className="events-page-wrapper">
      <EventsPageHero />
      <LatestEvents />
      <ExploreEvents />
    </div>
  );
}
