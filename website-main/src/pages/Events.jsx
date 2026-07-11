import React, { useState, useEffect, useMemo } from "react";
import allEvents from "./eventsData";
import "./Events.css";

// The one event marked isPast:false in the old data is the current/upcoming one.
// If you ever have zero or multiple upcoming events, update this line accordingly.
const spotlightEvent = allEvents.find((e) => !e.isPast) || allEvents[0];
const pastEvents = allEvents.filter((e) => e.isPast);

// Years present in the past events, newest first.
const YEARS = [
  "all",
  ...Array.from(new Set(pastEvents.map((e) => e.year))).sort((a, b) => b - a),
];

// The old data only stores "day month" + "year" (e.g. "13 March", "2026"), not a
// full timestamp, so the countdown target is set here explicitly. Update this
// whenever the spotlight event changes.
const SPOTLIGHT_TARGET_ISO = "2026-03-13T09:00:00";

// ---- small pieces -----------------------------------------------------
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}

function useCountdown(targetIso) {
  const [timeLeft, setTimeLeft] = useState({ days: "--", hrs: "--", min: "--", sec: "--" });

  useEffect(() => {
    const target = new Date(targetIso).getTime();

    function tick() {
      let diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / 86400000); diff -= days * 86400000;
      const hrs = Math.floor(diff / 3600000); diff -= hrs * 3600000;
      const min = Math.floor(diff / 60000); diff -= min * 60000;
      const sec = Math.floor(diff / 1000);
      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hrs: String(hrs).padStart(2, "0"),
        min: String(min).padStart(2, "0"),
        sec: String(sec).padStart(2, "0"),
      });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return timeLeft;
}

// ---- main component -----------------------------------------------------
export default function Events() {
  const [activeYear, setActiveYear] = useState("all");
  const [flippedCards, setFlippedCards] = useState({});
  const countdown = useCountdown(SPOTLIGHT_TARGET_ISO);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleEvents = useMemo(
    () =>
      activeYear === "all"
        ? pastEvents
        : pastEvents.filter((e) => e.year === activeYear),
    [activeYear]
  );

  return (
    <div className="ev">
      {/* ============ HERO ============ */}
      <header className="ev-hero">
        <div className="ev-eyebrow">
          <span className="ev-dot-live" /> IEEE WIE MUJ — EVENTS
        </div>
        <h1 className="ev-hero__title">
          EVERY
          <br />
          <span className="ev-accent">EVENT</span> IS A
          <br />
          SIGNAL.
        </h1>
        <p className="ev-hero__sub">
          Talks, hackathons, workshops and socials from IEEE Women in Engineering, MUJ
        </p>

        <div className="ev-hero__scroll">
          <span className="ev-arrow">↓</span> scroll for what&rsquo;s on air now
        </div>
      </header>

      {/* ============ SPOTLIGHT ============ */}
      <section id="spotlight">
        <div className="ev-spotlight-wrap">
          <div className="ev-section__head">
            <div className="ev-section__label ev-spotlight__label">
              <span className="ev-dot-live" /> ON AIR NOW
            </div>

          </div>
          <div className="ev-spotlight">
            <div className="ev-spotlight__visual">
              <img
                src={spotlightEvent.image}
                alt={spotlightEvent.title}
                className="ev-spotlight__img"
              />
              <span className="ev-spotlight__glow" aria-hidden="true" />
            </div>

            <div className="ev-spotlight__body">
              <span className="ev-spotlight__tag">
                <span className="ev-dot-live" /> Registrations open
              </span>
              <h3 className="ev-spotlight__title">{spotlightEvent.title}</h3>
              <p className="ev-spotlight__desc">{spotlightEvent.description}</p>

              <div className="ev-spotlight__meta">
                <div className="ev-meta-item">
                  <span className="k">Date</span>
                  <span className="v">{spotlightEvent.date}, {spotlightEvent.year}</span>
                </div>
              </div>

              <div className="ev-countdown">
                <div className="ev-cell">
                  <div className="ev-num">{countdown.days}</div>
                  <div className="ev-lab">Days</div>
                </div>
                <div className="ev-cell">
                  <div className="ev-num">{countdown.hrs}</div>
                  <div className="ev-lab">Hrs</div>
                </div>
                <div className="ev-cell">
                  <div className="ev-num">{countdown.min}</div>
                  <div className="ev-lab">Min</div>
                </div>
                <div className="ev-cell">
                  <div className="ev-num">{countdown.sec}</div>
                  <div className="ev-lab">Sec</div>
                </div>
              </div>

              <div className="ev-btn-row">
                <a href="#" className="ev-btn ev-btn-primary">Register now</a>
                <a href="#" className="ev-btn ev-btn-ghost">Event brief</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAST EVENTS ============ */}
      <section id="archive">
        <div className="ev-archive-wrap">
          <div className="ev-section__head">
            <div className="ev-section__title">Past Events</div>
            <div className="ev-filters">
              {YEARS.map((y) => (
                <button
                  key={y}
                  className={`ev-filter ${activeYear === y ? "active" : ""}`}
                  onClick={() => setActiveYear(y)}
                >
                  {y === "all" ? "All" : y}
                </button>
              ))}
            </div>
          </div>

          <div className="ev-past-grid">
            {visibleEvents.map((ev) => {
              const isFlipped = !!flippedCards[ev.id];
              return (
                <div className="ev-flip-outer" key={ev.id}>
                  <div className={`ev-flip-inner ${isFlipped ? "flipped" : ""}`}>
                    {/* ---- FRONT ---- */}
                    <div className="ev-flip-face ev-flip-front">
                      <div className="ev-past-card__thumb">
                        <img src={ev.image} alt={ev.title} loading="lazy" />
                        <span className="ev-past-card__year">{ev.year}</span>
                      </div>
                      <div className="ev-past-card__body">
                        <span className="ev-past-card__date">{ev.date}</span>
                        <h4 className="ev-past-card__title">{ev.title}</h4>
                        <p className="ev-past-card__desc">{ev.description}</p>
                        <button
                          type="button"
                          className="ev-past-card__link"
                          onClick={() => toggleFlip(ev.id)}
                        >
                          Read more <ArrowIcon />
                        </button>
                      </div>
                    </div>

                    {/* ---- BACK ---- */}
                    <div className="ev-flip-face ev-flip-back">
                      <span className="ev-past-card__date">{ev.date}, {ev.year}</span>
                      <h4 className="ev-past-card__title">{ev.title}</h4>
                      <p className="ev-past-card__desc ev-past-card__desc--full">
                        {ev.description}
                      </p>
                      <button
                        type="button"
                        className="ev-past-card__link ev-past-card__link--back"
                        onClick={() => toggleFlip(ev.id)}
                      >
                        ← Back
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {visibleEvents.length === 0 && (
            <p className="ev-empty">No events found for {activeYear}.</p>
          )}
        </div>
      </section>

      <div className="ev-footer-strip">
        <span>IEEE WIE MUJ © 2026</span>
        <span>Exploring the fusion of technology, creativity, and empowerment.</span>
      </div>
    </div>
  );
}
