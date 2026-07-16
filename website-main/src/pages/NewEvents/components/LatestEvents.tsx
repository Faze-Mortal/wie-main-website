import { motion, useReducedMotion } from 'framer-motion';
import {
  LATEST_EVENT_DELAYS,
  latestEventCard,
  latestEventsHeading,
  PREMIUM_EASE,
  SCROLL_VIEWPORT,
  viewAllLink,
} from './animations/animationVariants';

const popularEvents = [
  {
    id: 'pop-card-1',
    className: 'pop-card pop-card--sm pop-card--pink',
    imgClass: 'pop-card__img pop-card__img--1',
    poster: '/Events/herverdict.webp',
    alt: 'HerVerdict poster',
    label: 'HerVerdict',
    title: 'HerVerdict',
    date: '11 February 2026',
    location: 'AB1 Lobby',
    isCenter: false,
  },
  {
    id: 'pop-card-2',
    className: 'pop-card pop-card--sm pop-card--purple',
    imgClass: 'pop-card__img pop-card__img--2',
    poster: '/Events/confluence.webp',
    alt: 'Confluence poster',
    label: 'Confluence',
    title: 'The Confluence',
    date: '10 February 2026',
    location: 'Manipal University Jaipur',
    isCenter: false,
  },
  {
    id: 'pop-card-centre',
    className: 'pop-card pop-card--sm pop-card--violet',
    imgClass: 'pop-card__img pop-card__img--5',
    poster: '/Events/cyber_odyssey.jpeg',
    alt: 'Cyber Odyssey poster',
    label: 'Cyber Odyssey',
    title: 'Cyber Odyssey',
    date: '26-28 June 2026',
    location: 'Online / MUJ',
    isCenter: true,
  },
  {
    id: 'pop-card-5',
    className: 'pop-card pop-card--center pop-card--cyan',
    imgClass: 'pop-card__img pop-card__img--3',
    poster: '/Events/bnb8.jpeg',
    alt: 'Bits & Brews 8.0 poster',
    label: 'Bits & Brews 8.0',
    title: 'Bits & Brews 8.0',
    date: '14 June 2026',
    location: 'Google Meet (Online)',
    isCenter: false,
  },
  {
    id: 'pop-card-4',
    className: 'pop-card pop-card--sm pop-card--blue',
    imgClass: 'pop-card__img pop-card__img--4',
    poster: '/Events/dealroom.webp',
    alt: 'The Deal Room poster',
    label: 'The Deal Room',
    title: 'Shark Tank: The Deal Room',
    date: '11 February 2026',
    location: 'Smt. Sharda Pai',
    isCenter: false,
  },

];
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
