import { useEffect } from 'react';
let silkInitialized = false;
let particlesInitialized = false;
let fanCardsInitialized = false;

function initParticles() {
  const container = document.getElementById('particles');
  if (!container || particlesInitialized) return;
  particlesInitialized = true;

  const PARTICLE_COUNT = 40;
  const COLORS = [
    'rgba(18, 168, 146, 0.85)',
    'rgba(30, 207, 181, 0.70)',
    'rgba(240, 192, 64,  0.55)',
    'rgba(255, 255, 255, 0.40)',
    'rgba(13, 110, 95,   0.90)',
    'rgba(0,  212, 255,  0.50)',
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = Math.random() * 3.5 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 14 + 7;
    const delay = -(Math.random() * 18);
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    Object.assign(p.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      background: color,
      boxShadow: `0 0 ${size * 3}px ${color}`,
    });

    container.appendChild(p);
  }
}

function initParallax() {
  const heroLeft = document.getElementById('hero-left');
  const heroRight = document.getElementById('hero-right');
  if (!heroLeft || !heroRight) return;

  let rafId: number | null = null;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      applyParallax();
      rafId = null;
    });
  });

  function applyParallax() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const nx = (mouseX / vw - 0.5) * 2;
    const ny = (mouseY / vh - 0.5) * 2;

    const leftStrength = 8;
    heroLeft!.style.transform = `translate(${nx * leftStrength}px, ${ny * (leftStrength * 0.6)}px)`;

    const rightStrength = 14;
    heroRight!.style.transform = `translate(${-nx * rightStrength}px, ${-ny * (rightStrength * 0.55)}px)`;
  }

  document.addEventListener('mouseleave', () => {
    heroLeft!.style.transform = 'translate(0, 0)';
    heroRight!.style.transform = 'translate(0, 0)';
  });
}

function initCapsuleTilt() {
  const capsules = document.querySelectorAll('.event-card');
  if (!capsules.length) return;

  const PERSPECTIVE = 600;
  const MAX_ROTATE_X = 8;
  const MAX_ROTATE_Y = 8;
  const SCALE_HOVER = 1.03;
  const EASE_BACK = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)';

  capsules.forEach((capsule) => {
    const frame = capsule.querySelector('.event-image-wrapper');

    capsule.addEventListener('mousemove', (e) => {
      const rect = capsule.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const y = (e as MouseEvent).clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotateX = ((y - cy) / cy) * -MAX_ROTATE_X;
      const rotateY = ((x - cx) / cx) * MAX_ROTATE_Y;

      if (frame) {
        (frame as HTMLElement).style.transition = 'none';
        (frame as HTMLElement).style.transform =
          `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALE_HOVER})`;
      }
    });

    capsule.addEventListener('mouseleave', () => {
      if (frame) {
        (frame as HTMLElement).style.transition = EASE_BACK;
        (frame as HTMLElement).style.transform =
          'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
      }
    });
  });
}

function initFanCards() {
  const cards = Array.from(document.querySelectorAll('.deck-card'));
  if (cards.length === 0 || fanCardsInitialized) return;
  fanCardsInitialized = true;

  const deckPositions = [
    { zIndex: 5, transform: 'translateX(0px) translateY(0px) rotate(-3deg) scale(1)', filter: 'blur(0px) brightness(1)' },
    { zIndex: 4, transform: 'translateX(75px) translateY(-5px) rotate(4deg) scale(0.94)', filter: 'blur(1px) brightness(0.85)' },
    { zIndex: 3, transform: 'translateX(140px) translateY(5px) rotate(9deg) scale(0.87)', filter: 'blur(2px) brightness(0.70)' },
    { zIndex: 2, transform: 'translateX(195px) translateY(20px) rotate(15deg) scale(0.80)', filter: 'blur(4px) brightness(0.55)' },
    { zIndex: 1, transform: 'translateX(240px) translateY(40px) rotate(21deg) scale(0.73)', filter: 'blur(6px) brightness(0.40)' },
  ];

  let activeIndex = 0;

  function updateDeck() {
    cards.forEach((card, index) => {
      const relativePosition = (index - activeIndex + cards.length) % cards.length;
      const positionStyle = deckPositions[relativePosition];

      (card as HTMLElement).style.zIndex = String(positionStyle.zIndex);
      (card as HTMLElement).style.transform = positionStyle.transform;
      (card as HTMLElement).style.filter = positionStyle.filter;

      const overlay = card.querySelector('.card-overlay');
      if (overlay) {
        if (relativePosition === 0) {
          (overlay as HTMLElement).style.opacity = '1';
          (overlay as HTMLElement).style.pointerEvents = 'auto';
          (card as HTMLElement).style.cursor = 'default';
        } else {
          (overlay as HTMLElement).style.opacity = '0';
          (overlay as HTMLElement).style.pointerEvents = 'none';
          (card as HTMLElement).style.cursor = 'pointer';
        }
      }
    });
  }

  updateDeck();

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const relativePosition = (index - activeIndex + cards.length) % cards.length;
      if (relativePosition !== 0) {
        activeIndex = index;
        updateDeck();
      }
    });

    card.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
        e.preventDefault();
        (card as HTMLElement).click();
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetSelector = link.getAttribute('href');
      if (!targetSelector || targetSelector === '#') return;
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

export function useInteractiveEffects() {
  useEffect(() => {
    initParallax();
    initFanCards();
    initSmoothScroll();
    initCapsuleTilt();

    console.log(
      '%c✦ EventVerse loaded successfully ✦',
      'font-family:serif; font-size:14px; color:#f0c040; text-shadow:0 0 10px gold;',
    );
  }, []);
}

export function reinitCapsuleTilt() {
  initCapsuleTilt();
}
