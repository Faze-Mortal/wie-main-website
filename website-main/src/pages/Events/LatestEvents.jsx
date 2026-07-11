import { motion, useReducedMotion } from 'framer-motion';
import {
  LATEST_EVENT_DELAYS,
  latestEventCard,
  latestEventsHeading,
  PREMIUM_EASE,
  SCROLL_VIEWPORT,
  viewAllLink,
} from '../../components/animations/animationVariants';

import allEvents from '../eventsData';

const latestClasses = [
  { cardClass: 'pop-card pop-card--sm pop-card--pink', imgClass: 'pop-card__img pop-card__img--1', isCenter: false },
  { cardClass: 'pop-card pop-card--sm pop-card--purple', imgClass: 'pop-card__img pop-card__img--2', isCenter: false },
  { cardClass: 'pop-card pop-card--center pop-card--blue', imgClass: 'pop-card__img pop-card__img--3', isCenter: true },
  { cardClass: 'pop-card pop-card--sm pop-card--cyan', imgClass: 'pop-card__img pop-card__img--4', isCenter: false },
  { cardClass: 'pop-card pop-card--sm pop-card--violet', imgClass: 'pop-card__img pop-card__img--5', isCenter: false },
];

const popularEvents = allEvents.slice(0, 5).map((event, index) => ({
  id: event.id,
  className: latestClasses[index].cardClass,
  imgClass: latestClasses[index].imgClass,
  poster: event.image,
  alt: event.title,
  label: event.title + (latestClasses[index].isCenter ? ' — Number 1 this week' : ''),
  title: event.title,
  date: event.date + (event.year ? ', ' + event.year : ''),
  location: event.location,
  isCenter: latestClasses[index].isCenter,
}));

export default function LatestEvents() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="popular" className="popular" aria-labelledby="popular-heading">
      <div className="section-wrap">
        <header className="section-header">
          <motion.h2
            className="section-title section-title--neon reveal-wrapper"
            id="popular-heading"
            initial={shouldReduceMotion ? false : latestEventsHeading.hidden}
            whileInView={shouldReduceMotion ? undefined : latestEventsHeading.visible}
            viewport={SCROLL_VIEWPORT}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
          >
            Latest Events
          </motion.h2>
          <motion.a
            href="#explore-events"
            id="popular-view-all"
            className="view-all-link reveal-wrapper"
            initial={shouldReduceMotion ? false : viewAllLink.hidden}
            whileInView={shouldReduceMotion ? undefined : viewAllLink.visible}
            viewport={SCROLL_VIEWPORT}
            transition={{ duration: 0.75, delay: 0.15, ease: PREMIUM_EASE }}
          >
            View All <span aria-hidden="true">→</span>
          </motion.a>
        </header>

        <div className="pop-row" id="pop-row" role="list" aria-label="Popular events this week">
          {popularEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="latest-event-reveal-wrapper reveal-wrapper"
              initial={shouldReduceMotion ? false : latestEventCard.hidden}
              whileInView={shouldReduceMotion ? undefined : latestEventCard.visible}
              viewport={SCROLL_VIEWPORT}
              transition={{
                duration: 0.75,
                delay: LATEST_EVENT_DELAYS[index],
                ease: PREMIUM_EASE,
              }}
            >
              <article
                className={event.className}
                id={event.id}
                role="listitem"
                tabIndex={0}
                aria-label={event.label}
              >
                <div className="pop-card__frame">
                  <div className={event.imgClass}>
                    <img
                      src={event.poster}
                      alt={event.alt}
                      className="pop-card__poster"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="pop-card__info">
                  <h3 className="pop-card__title">{event.title}</h3>
                  <div className="pop-card__meta">
                    <span className="pop-card__date">{event.date}</span>
                    <span className="pop-card__loc">{event.location}</span>
                  </div>
                  {event.isCenter && (
                    <a href="#" id="pop-center-tickets" className="pop-card__btn">
                      REGISTER
                    </a>
                  )}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
