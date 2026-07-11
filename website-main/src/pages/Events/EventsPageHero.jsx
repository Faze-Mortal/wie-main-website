import { motion, useReducedMotion } from 'framer-motion';
import {
  heroDeck,
  heroEmblem,
  heroOrnament,
  heroSubtitle,
  heroTitle,
  PREMIUM_EASE,
} from '../../components/animations/animationVariants';

const deckCards = [
  {
    className: 'deck-card front-card',
    src: '/Events/poster1.jpg',
    alt: 'Elite Grand Championship',
    label: 'Bring Elite Grand Championship to front',
    title: 'HerVerdict',
  },
  {
    className: 'deck-card bg-card-1',
    src: '/Events/poster2.jpg',
    alt: 'Neon Pulse Festival',
    label: 'Bring Neon Pulse Festival to front',
    title: 'Vision IAS',
  },
  {
    className: 'deck-card bg-card-2',
    src: '/Events/poster3.jpg',
    alt: 'Future Tech Summit',
    label: 'Bring Future Tech Summit to front',
    title: 'The Deal Room',
  },
  {
    className: 'deck-card bg-card-3',
    src: '/Events/poster4.jpg',
    alt: 'Global Arts Expo',
    label: 'Bring Global Arts Expo to front',
    title: 'Swara',
  },
  {
    className: 'deck-card bg-card-4',
    src: '/Events/poster5.jpg',
    alt: 'World Championship Series',
    label: 'Bring World Championship Series to front',
    title: 'Swara',
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? { initial: false }
    : { initial: 'hidden', animate: 'visible' };

  return (
    <section id="hero" className="hero" aria-label="Hero section">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-base" />
        <div className="hero__bg-mist hero__bg-mist--a" />
        <div className="hero__bg-mist hero__bg-mist--b" />
        <div className="hero__bg-mist hero__bg-mist--c" />
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div id="particles" className="hero__particles" aria-hidden="true" />
      </div>

      <div className="organic-border organic-border--top" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C120,40 240,10 360,25 C480,40 600,5 720,20 C840,35 960,8 1080,22 C1200,36 1320,12 1440,28 L1440,0 Z" fill="#1c1105" opacity="0.92" />
          <path d="M0,0 C160,30 310,8 460,18 C610,28 740,4 880,15 C1020,26 1160,6 1300,16 C1380,22 1440,14 1440,14 L1440,0 Z" fill="#2d1b09" opacity="0.7" />
          <path d="M0,0 C80,16 200,5 320,10 C440,15 560,2 680,8 C800,14 920,3 1040,7 C1160,11 1300,2 1440,6 L1440,0 Z" fill="#3f2510" opacity="0.5" />
        </svg>
      </div>

      <div className="hero__content" id="hero-content">
        <div className="hero__left" id="hero-left">
          <motion.div
            className="hero__emblem reveal-wrapper"
            aria-hidden="true"
            variants={heroEmblem}
            {...motionProps}
            transition={{ duration: 0.75, delay: 0.05, ease: PREMIUM_EASE }}
          >
            <span className="emblem__ring emblem__ring--outer" />
            <span className="emblem__ring emblem__ring--inner" />
            <span className="emblem__star">✦</span>
          </motion.div>

          <h1 className="hero__title" id="hero-title">
            <motion.span
              className="hero__title-word reveal-wrapper"
              variants={heroTitle}
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15, ease: PREMIUM_EASE }}
            >
              Events
            </motion.span>
            <motion.span
              className="hero__title-ornament reveal-wrapper"
              aria-hidden="true"
              style={{ display: 'block', transformOrigin: 'center' }}
              variants={heroOrnament}
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.25, ease: PREMIUM_EASE }}
            >
              — — ✦ — —
            </motion.span>
          </h1>

          <motion.p
            className="hero__subtitle reveal-wrapper"
            variants={heroSubtitle}
            {...motionProps}
            transition={{ duration: 0.75, delay: 0.32, ease: PREMIUM_EASE }}
          >
            Discover extraordinary moments.
            <br />
            Experience the unforgettable.
          </motion.p>

          <div className="hero__cta-group" role="group" aria-label="Primary actions">
            <motion.a
              href="#popular"
              id="cta-explore"
              className="cta cta--primary reveal-wrapper"
              variants={heroSubtitle}
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.42, ease: PREMIUM_EASE }}
            >
              <span className="cta__shine" aria-hidden="true" />
              Explore Events
            </motion.a>
            <motion.a
              href="#explore-events"
              id="cta-browse"
              className="cta cta--secondary reveal-wrapper"
              variants={heroSubtitle}
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.5, ease: PREMIUM_EASE }}
            >
              Browse Categories
            </motion.a>
          </div>
        </div>

        <div className="hero__right" id="hero-right">
          <motion.div
            className="hero-deck-reveal-wrapper"
            variants={heroDeck}
            {...motionProps}
            transition={{ duration: 0.75, delay: 0.25, ease: PREMIUM_EASE }}
          >
            <div className="cascade-deck" id="cascade-deck">
              {deckCards.map((card) => (
                <div
                  key={card.className}
                  className={card.className}
                  tabIndex={0}
                  aria-label={card.label}
                >
                  <img src={card.src} alt={card.alt} />
                  <div className="card-overlay">
                    <h2 className="card-title">{card.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="organic-border organic-border--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,130 C120,90 240,120 360,105 C480,90 600,125 720,110 C840,95 960,122 1080,108 C1200,94 1320,118 1440,102 L1440,130 Z" fill="#08090f" opacity="0.95" />
          <path d="M0,130 C200,115 380,128 560,120 C740,112 900,128 1080,118 C1220,110 1360,124 1440,118 L1440,130 Z" fill="#0a0b14" opacity="0.8" />
        </svg>
      </div>
    </section>
  );
}
