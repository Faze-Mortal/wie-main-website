export interface PreviousEvent {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
}

export const previousEvents: PreviousEvent[] = [
  {
    id: 1,
    title: 'Elite Grand Championship',
    image: '/posters/poster1.webp',
    category: 'TECH',
    date: '12 Jan 2026',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    title: 'Neon Pulse Festival',
    image: '/posters/poster2.webp',
    category: 'MUSIC',
    date: '28 Feb 2026',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    title: 'Tech Summit 2026',
    image: '/posters/poster3.webp',
    category: 'TECH',
    date: '15 Mar 2026',
    location: 'Austin, TX',
  },
  {
    id: 4,
    title: 'Arts Expo International',
    image: '/posters/poster4.webp',
    category: 'ARTS',
    date: '3 Apr 2026',
    location: 'New York, NY',
  },
  {
    id: 5,
    title: 'World Championship Series',
    image: '/posters/poster5.webp',
    category: 'SPORTS',
    date: '20 Apr 2026',
    location: 'Chicago, IL',
  },
  {
    id: 6,
    title: 'Aurora Sound Festival',
    image: '/posters/poster2.webp',
    category: 'MUSIC',
    date: '18 Jul 2026',
    location: 'Seattle, WA',
  },
  {
    id: 7,
    title: 'Digital Art Showcase',
    image: '/posters/poster4.webp',
    category: 'ARTS',
    date: '5 Aug 2026',
    location: 'Miami, FL',
  },
  {
    id: 8,
    title: 'Cybersport World Finals',
    image: '/posters/poster1.webp',
    category: 'GAMING',
    date: '22 Aug 2026',
    location: 'Las Vegas, NV',
  },
];
