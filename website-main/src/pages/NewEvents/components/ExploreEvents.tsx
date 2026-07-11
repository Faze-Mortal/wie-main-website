import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { previousEvents } from '../data/previousEvents';
import { reinitCapsuleTilt } from '../lib/effects';
import {
  exploreEventCard,
  exploreEventsHeading,
  getExploreCardDelay,
  PREMIUM_EASE,
  SCROLL_VIEWPORT,
} from './animations/animationVariants';

export default function ExploreEvents() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    reinitCapsuleTilt();
  }, []);

  return (
    <section id="explore-events" className="explore" aria-labelledby="explore-heading">
      <div className="section-wrap">
        <header className="section-header">
          <motion.h2
            className="section-title section-title--violet reveal-wrapper"
            id="explore-heading"
            initial={shouldReduceMotion ? false : exploreEventsHeading.hidden}
            whileInView={shouldReduceMotion ? undefined : exploreEventsHeading.visible}
            viewport={SCROLL_VIEWPORT}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
          >
            Explore events
          </motion.h2>
        </header>

        <div className="events-grid" id="events-grid" role="list" aria-label="Previous events">
          {previousEvents.map((ev, index) => (
            <motion.div
              key={ev.id}
              className="event-reveal-wrapper reveal-wrapper"
              initial={shouldReduceMotion ? false : exploreEventCard.hidden}
              whileInView={shouldReduceMotion ? undefined : exploreEventCard.visible}
              viewport={SCROLL_VIEWPORT}
              transition={{
                duration: 0.72,
                delay: getExploreCardDelay(index),
                ease: PREMIUM_EASE,
              }}
            >
              <a
                href="#"
                className="event-card"
                id={`event-card-${ev.id}`}
                role="listitem"
                tabIndex={0}
                aria-label={`${ev.title} — ${ev.date}`}
              >
                <div className="event-image-wrapper">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="event-image"
                    loading="lazy"
                  />
                </div>
                <div className="event-info">
                  <h3 className="event-title">{ev.title}</h3>
                  <span className="event-meta-top">
                    {ev.date}
                  </span>
                  <span className="event-meta-location">{ev.location}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
