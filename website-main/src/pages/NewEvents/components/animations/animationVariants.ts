export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.18,
} as const;

export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.15,
} as const;

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export const revealUpReduced = {
  hidden: { opacity: 1, y: 0, filter: 'blur(0px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const heroEmblem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const heroTitle = {
  hidden: { opacity: 0, y: 35, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const heroOrnament = {
  hidden: { opacity: 0, scaleX: 0.65 },
  visible: { opacity: 1, scaleX: 1 },
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export const heroDeck = {
  hidden: {
    opacity: 0,
    x: 55,
    scale: 0.96,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

export const latestEventsHeading = {
  hidden: { opacity: 0, y: 35, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const viewAllLink = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const latestEventCard = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

export const exploreEventsHeading = {
  hidden: { opacity: 0, y: 35, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const exploreEventCard = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

export const LATEST_EVENT_DELAYS = [0, 0.09, 0.18, 0.27, 0.36];

export const EXPLORE_ROW_DELAYS = [0, 0.1, 0.2, 0.3];

export function getExploreCardDelay(index: number, cardsPerRow = 4): number {
  const col = index % cardsPerRow;
  return EXPLORE_ROW_DELAYS[col] ?? 0;
}
