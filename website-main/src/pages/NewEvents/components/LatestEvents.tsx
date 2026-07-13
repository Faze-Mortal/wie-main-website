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
    poster: '/posters/poster1.webp',
    alt: 'HerVerdict poster',
    label: 'HerVerdict',
    title: 'HerVerdict',
    date: 'Jul 18, 2026',
    isCenter: false,
  },
  {
    id: 'pop-card-2',
    className: 'pop-card pop-card--sm pop-card--purple',
    imgClass: 'pop-card__img pop-card__img--2',
    poster: '/posters/poster2.webp',
    alt: 'Vision IAS poster',
    label: 'Vision IAS',
    title: 'Vision IAS',
    date: 'Jul 22, 2026',
    isCenter: false,
  },
  {
    id: 'pop-card-center',
    className: 'pop-card pop-card--center pop-card--blue',
    imgClass: 'pop-card__img pop-card__img--3',
    poster: '/posters/poster3.webp',
    alt: 'The Deal Room poster',
    label: 'The Deal Room — Number 1 this week',
    title: 'The Deal Room',
    date: 'Jul 26, 2026',
    isCenter: true,
  },
  {
    id: 'pop-card-4',
    className: 'pop-card pop-card--sm pop-card--cyan',
    imgClass: 'pop-card__img pop-card__img--4',
    poster: '/posters/poster4.webp',
    alt: 'Swara poster',
    label: 'Swara',
    title: 'Swara',
    date: 'Aug 3, 2026',
    isCenter: false,
  },
  {
    id: 'pop-card-5',
    className: 'pop-card pop-card--sm pop-card--violet',
    imgClass: 'pop-card__img pop-card__img--5',
    poster: '/posters/poster5.webp',
    alt: 'Swara poster',
    label: 'Swara',
    title: 'Swara',
    date: 'Aug 10, 2026',
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
