import { useState, useEffect, useRef, useCallback } from 'react'
import './Gallery.css'

/* ================================================================
   IMAGE DATA — real photos from /Gallery/
   Categories: flagship | workshops | celebrations | team
   ================================================================ */
const CATEGORIES = [
  { key: 'moments', label: 'Moments' },
  { key: 'fun-moments', label: 'Fun Moments' },
  { key: 'elysium', label: 'Elysium' },
  { key: 'cc-summit', label: 'CC Summit' },
  { key: 'group-photo', label: 'Group Photo' },
  { key: 'reeti-riwaz', label: 'Reeti Riwaz' },
]
export const galleryPhotos = [
  { id: 1, src: '/Gallery/IMG-1.jpg', cat: 'elysium', caption: 'Elysium Family', description: 'Elysium Day 2' },
  { id: 2, src: '/Gallery/IMG-2.JPG', cat: 'reeti-riwaz', caption: 'Tradition Together', description: 'Reeti Riwaz 2025' },
  { id: 3, src: '/Gallery/IMG-3.JPG', cat: 'fun-moments', caption: 'Making Memories', description: 'eepy  (* ´ ﹃｀*)ᶻ' },
  { id: 4, src: '/Gallery/IMG-4.JPG', cat: 'group-photo', caption: 'Panel Perspectives', description: 'Confluence panel group photo' },
  { id: 5, src: '/Gallery/IMG-5.JPG', cat: 'moments', caption: 'The Final Night', description: 'Last night desk of the tenure' },
  { id: 6, src: '/Gallery/IMG-6.jpg', cat: 'elysium', caption: 'The Beginning', description: 'Elysium 1.0' },
  { id: 7, src: '/Gallery/IMG-7.jpg', cat: 'cc-summit', caption: 'Summit Success', description: 'CC Summit of 2025' },
  { id: 8, src: '/Gallery/IMG-8.jpg', cat: 'fun-moments', caption: 'Pure Joy', description: 'A burst of laughter shared between the team' },
  { id: 9, src: '/Gallery/IMG-9.jpg', cat: 'elysium', caption: 'Night Vibes', description: 'The last night perm of Elysium 2.0' },
  { id: 10, src: '/Gallery/IMG-10.jpg', cat: 'elysium', caption: 'Ideas in Motion', description: "Elysium's Confluence panel" },
  { id: 11, src: '/Gallery/IMG-11.jpg', cat: 'fun-moments', caption: 'Picture Perfect', description: 'A quick pause for a picture-perfect frame' },
  { id: 12, src: '/Gallery/IMG-12.jpg', cat: 'moments', caption: 'A Warm Farewell', description: "Confluence's panel send-off" },
  { id: 13, src: '/Gallery/IMG-13.jpg', cat: 'moments', caption: 'Together We Learn', description: 'An Indulge participant' },
  { id: 14, src: '/Gallery/IMG-14.jpg', cat: 'fun-moments', caption: 'Smiles All Around', description: 'A moment full of smiles from the team' },
  { id: 15, src: '/Gallery/IMG-15.jpg', cat: 'elysium', caption: 'Her Verdict', description: 'Spirit of the event' },
  { id: 16, src: '/Gallery/IMG-16.jpg', cat: 'fun-moments', caption: 'Beyond the Event', description: 'Sweet memories' },
  { id: 17, src: '/Gallery/IMG-17.jpg', cat: 'moments', caption: 'Event Highlights', description: 'A memorable moment captured during Her Verdict' },
  { id: 18, src: '/Gallery/IMG-18.jpg', cat: 'fun-moments', caption: 'Captured Moments', description: 'Light-hearted fun caught candidly on camera' },
  { id: 19, src: '/Gallery/IMG-19.jpg', cat: 'moments', caption: 'Celebrating Together', description: 'Spirit of the participants' },
  { id: 20, src: '/Gallery/IMG-20.JPG', cat: 'elysium', caption: 'Center Stage', description: "Elysium's flex drop" },
  { id: 21, src: '/Gallery/IMG-21.jpg', cat: 'fun-moments', caption: 'Goofing Around', description: 'Bringing the spirit of the event to life, one interaction at a time' },
  { id: 22, src: '/Gallery/IMG-22.jpg', cat: 'moments', caption: '(,,>﹏<,,)👉👈', description: 'Fun moments (uwu)' },
  { id: 23, src: '/Gallery/IMG-23.jpg', cat: 'moments', caption: 'A Sweet Memory', description: 'A quiet, sweet moment worth holding onto' },
  { id: 24, src: '/Gallery/IMG-24.jpg', cat: 'reeti-riwaz', caption: 'Glimpse of Tradition', description: 'Reeti Riwaz 2025 closing group photo' },
  { id: 25, src: '/Gallery/IMG-25.jpg', cat: 'cc-summit', caption: 'Moments That Matter', description: 'CC Summit group photo' },
  { id: 26, src: '/Gallery/IMG-26.jpg', cat: 'fun-moments', caption: 'Forever Together', description: 'A fun moment shared among close friends' },
  { id: 27, src: '/Gallery/IMG-27.jpg', cat: 'cc-summit', caption: 'WIE at CC Summit', description: 'The WIE team representing at the CC Summit' },
  { id: 28, src: '/Gallery/IMG-28.jpg', cat: 'cc-summit', caption: 'Through the Lens', description: 'The WIE team together at the CC Summit' },
  { id: 29, src: '/Gallery/IMG-29.jpg', cat: 'cc-summit', caption: 'Friends Forever', description: 'A candid moment between friends at the summit' },
  { id: 30, src: '/Gallery/IMG-30.jpg', cat: 'fun-moments', caption: 'Synphere Nights', description: 'Fun moments from the Synphere night' },
  { id: 31, src: '/Gallery/IMG-31.jpg', cat: 'moments', caption: 'NWW Family', description: 'WIE group photo, Synphere Night' },
  { id: 32, src: '/Gallery/IMG-32.jpg', cat: 'group-photo', caption: 'Shared Smiles', description: 'NWW group photo' },
  { id: 33, src: '/Gallery/IMG-33.jpg', cat: 'group-photo', caption: 'Innovation Together', description: 'The team coming together over shared ideas' },
  { id: 34, src: '/Gallery/IMG-34.jpg', cat: 'group-photo', caption: 'One More Memory', description: 'NWW' },
  { id: 35, src: '/Gallery/IMG-35.jpg', cat: 'reeti-riwaz', caption: 'Snapshots of Joy', description: 'Joyful snapshots from Reeti Riwaz' },
  { id: 36, src: '/Gallery/IMG-36.jpg', cat: 'reeti-riwaz', caption: 'A Sweet Memory', description: 'A warm memory from Reeti Riwaz' },
  { id: 37, src: '/Gallery/IMG-37.jpg', cat: 'fun-moments', caption: 'Just WIE Things', description: 'Crown Conquest' },
  { id: 38, src: '/Gallery/IMG-38.jpg', cat: 'moments', caption: 'The Last Desk for the Tenure', description: "Crown Conquest's desk" },
  { id: 39, src: '/Gallery/IMG-39.jpg', cat: 'group-photo', caption: 'Memories of CoD', description: 'Circle of Destruction' },
  { id: 40, src: '/Gallery/IMG-40.jpg', cat: 'fun-moments', caption: 'Unscripted', description: 'Celebrating the event beyond the stage' },
  { id: 41, src: '/Gallery/IMG-41.jpg', cat: 'fun-moments', caption: 'Living the Moment', description: 'Soaking in a lighthearted moment with the team' },
  { id: 42, src: '/Gallery/IMG-42.jpg', cat: 'fun-moments', caption: 'Some Nights Become Memories', description: 'A night that turned into a memory worth keeping' },
  { id: 43, src: '/Gallery/IMG-43.jpg', cat: 'moments', caption: 'Committee Connect', description: 'CC meet' },
  { id: 44, src: '/Gallery/IMG-44.jpg', cat: 'group-photo', caption: 'Group Photo', description: "Night perm for Promptopia✨" },
  { id: 45, src: '/Gallery/IMG-45.jpg', cat: 'group-photo', caption: 'The WIE Family', description: "Promptopia's group photo" },
  { id: 46, src: '/Gallery/IMG-46.jpg', cat: 'moments', caption: 'Together Always', description: 'A reminder of the bond shared by the team' },
  { id: 47, src: '/Gallery/IMG-47.jpg', cat: 'fun-moments', caption: 'Candid Moments', description: "A candid frame that reflects the teamwork, friendship, and joy" },
  { id: 48, src: '/Gallery/IMG-48.jpg', cat: 'group-photo', caption: 'Confluence Crew', description: "Confluence's group photo" },
  { id: 49, src: '/Gallery/IMG-49.jpg', cat: 'moments', caption: 'Every Smile Counts', description: 'Every smile in this frame tells its own story' },
  { id: 50, src: '/Gallery/IMG-50.jpg', cat: 'moments', caption: 'Creating Memories', description: 'A moment made while creating memories together' },
  { id: 51, src: '/Gallery/IMG-51.jpg', cat: 'moments', caption: 'Executive Excellence', description: 'A snapshot celebrating the team\'s hard work' },
  { id: 52, src: '/Gallery/IMG-52.jpg', cat: 'moments', caption: 'A Moment to Remember', description: "EC's group photo" },
  { id: 53, src: '/Gallery/IMG-53.jpg', cat: 'elysium', caption: 'Voices That Matter', description: "Elysium's closing" },
  { id: 54, src: '/Gallery/IMG-54.jpg', cat: 'group-photo', caption: 'Together Again', description: "Her Verdict group photo" },
  { id: 55, src: '/Gallery/IMG-55.jpg', cat: 'elysium', caption: 'Opening the Dialogue', description: 'A moment from the start of the conversation' },
  { id: 56, src: '/Gallery/IMG-56.jpg', cat: 'elysium', caption: 'The Journey Begins', description: 'Confluence opening ceremony' },
  { id: 57, src: '/Gallery/IMG-57.jpg', cat: 'moments', caption: 'Golden Memories', description: "Elysium's opening ceremony" },
  { id: 58, src: '/Gallery/IMG-58.jpg', cat: 'fun-moments', caption: 'Laugh Out Loud', description: 'A moment of shared laughter with the team' },
  { id: 59, src: '/Gallery/IMG-59.jpg', cat: 'elysium', caption: 'Inspiring Voice', description: 'Moments that spark joy' },
  { id: 60, src: '/Gallery/IMG-60.jpg', cat: 'elysium', caption: 'Honouring Excellence', description: "Felicitation at Confluence, Raghav Gaerg" },
  { id: 61, src: '/Gallery/IMG-61.jpg', cat: 'elysium', caption: 'Picture This', description: "Confluence, Aishwarya's speech" },
  { id: 62, src: '/Gallery/IMG-62.jpg', cat: 'moments', caption: 'Lighting Up the Night', description: 'A moment lit up by the evening\'s energy' },
  { id: 63, src: '/Gallery/IMG-63.jpg', cat: 'moments', caption: 'The Journey Continues', description: "Elysium's night perm" },
  { id: 64, src: '/Gallery/IMG-64.jpg', cat: 'moments', caption: 'One More Click', description: 'One more frame to add to the collection' },
  { id: 65, src: '/Gallery/IMG-65.jpg', cat: 'moments', caption: 'Standing Tall', description: 'A moment of pride captured together' },
  { id: 66, src: '/Gallery/IMG-66.jpg', cat: 'group-photo', caption: 'Good Times', description: 'Crown Conquest group photo' },
  { id: 67, src: '/Gallery/IMG-67.jpg', cat: 'moments', caption: 'Captured Forever', description: 'A fun memory frozen in frame' },
  { id: 68, src: '/Gallery/IMG-68.jpg', cat: 'fun-moments', caption: 'Endless Smiles', description: 'Smiles that lasted the whole evening' },
  { id: 69, src: '/Gallery/IMG-69.jpg', cat: 'fun-moments', caption: 'Simply Unforgettable', description: 'Oneiros Night' },
  { id: 70, src: '/Gallery/IMG-70.jpg', cat: 'moments', caption: 'A Happiness in Frame', description: 'A fun memory captured in the moment' },
  { id: 71, src: '/Gallery/IMG-71.jpg', cat: 'moments', caption: 'Happiness in Frame', description: "EC Farewell Cake Cutting" },
  { id: 72, src: '/Gallery/IMG-72.jpg', cat: 'fun-moments', caption: 'A Moment to Remember', description: "The Farewell" },
  { id: 73, src: '/Gallery/IMG-73.jpg', cat: 'group-photo', caption: 'Late Night Memories', description: 'A Farewell group photo' },
  { id: 74, src: '/Gallery/IMG-74.jpg', cat: 'moments', caption: 'One Team, One Journey', description: 'The newly appointed Executive Committee, ready to embark on a new journey together.' },
  { id: 75, src: '/Gallery/IMG-75.jpg', cat: 'moments', caption: 'The Final Page, But Never the End of the Memories', description: 'Last day of the tenure' },
  { id: 76, src: '/Gallery/IMG-76.jpg', cat: 'group-photo', caption: 'What Began With Introductions Ends With Unforgettable Memories', description: 'Last group photo of the tenure' },
  { id: 77, src: '/Gallery/IMG-77.jpg', cat: 'reeti-riwaz', caption: 'A Glimpse of Tradition', description: 'Team photo of Reeti-Riwaz' }
];


function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null) // index into visiblePhotos
  const cardRefs = useRef([])

  /* ---- filtered list ---- */
  const visiblePhotos = activeFilter === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.cat === activeFilter)

  /* ---- scroll-reveal via IntersectionObserver ---- */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    cardRefs.current.forEach(el => { if (el) io.observe(el) })
    return () => io.disconnect()
  }, [activeFilter]) // re-run when filter changes (new DOM)

  /* ---- lightbox keyboard nav ---- */
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length)
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % visiblePhotos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, visiblePhotos.length, closeLightbox])

  /* ---- helpers ---- */
  const countFor = (key) =>
    key === 'all' ? galleryPhotos.length : galleryPhotos.filter(p => p.cat === key).length

  const lbPhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null

  const handleFilterChange = (key) => {
    setActiveFilter(key)
    setLightboxIndex(null)
    // reset show classes so new cards animate in
    cardRefs.current = []
  }

  return (
    <div className="gallery-page">

      {/* ── Hero ── */}
      <header className="g-hero">
        <div className="g-hero-bottom-light" aria-hidden="true" />
        <div className="g-hero-content">
          <h1 className="g-title">GALLERY</h1>
          <div className="g-infinity-container">
            <svg viewBox="0 0 100 50" className="g-infinity-svg" preserveAspectRatio="xMidYMid meet">
              <path
                d="M50,25 C35,10 15,10 15,25 C15,40 35,40 50,25 C65,10 85,10 85,25 C85,40 65,40 50,25 Z"
                className="g-infinity-path"
              />
              <path
                d="M50,25 C35,10 15,10 15,25 C15,40 35,40 50,25 C65,10 85,10 85,25 C85,40 65,40 50,25 Z"
                className="g-infinity-glow"
              />
            </svg>
          </div>
          <p className="g-subtitle">
            Where every event becomes a memory and every moment tells our story.
          </p>

          {/* Scroll indicator */}
          <div className="g-scroll-hint" aria-hidden="true">
            <span>Scroll to explore</span>
            <span className="g-scroll-arrow">↓</span>
          </div>
        </div>
      </header>


      {/* ── Filter bar ── */}
      <div className="g-filter-bar" role="toolbar" aria-label="Filter gallery by category">
        {[{ key: 'all', label: 'All Moments' }, ...CATEGORIES].map((c) => (
          <button
            key={c.key}
            className={`g-chip${activeFilter === c.key ? ' active' : ''}`}
            onClick={() => handleFilterChange(c.key)}
            aria-pressed={activeFilter === c.key}
          >
            {c.label}
            <span className="g-count">{countFor(c.key)}</span>
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <main className="g-grid" id="gallery-grid">
        {visiblePhotos.map((p, i) => (
          <div
            key={`${p.id}-${activeFilter}`}
            ref={el => { cardRefs.current[i] = el }}
            className="g-card"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${p.caption}`}
            onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(i) }}
          >
            <img src={p.src} loading="lazy" alt={p.caption} />
            <div className="g-card-zoom" aria-hidden="true">⤢</div>
            <div className="g-card-overlay">
              <div className="g-card-info">
                <div className="g-card-tag">
                  {CATEGORIES.find(c => c.key === p.cat)?.label ?? p.cat}
                </div>
                <div className="g-card-caption">{p.caption}</div>
                {p.description && (
                  <div className="g-card-desc">{p.description}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* ── Lightbox ── */}
      <div
        className={`g-lightbox${lbPhoto ? ' open' : ''}`}
        id="gallery-lightbox"
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {lbPhoto && (
          <div className="g-lb-inner">
            <button
              className="g-lb-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >✕</button>

            <button
              className="g-lb-nav g-lb-prev"
              onClick={() => setLightboxIndex(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length)}
              aria-label="Previous image"
            >‹</button>

            <img src={lbPhoto.src} alt={lbPhoto.caption} />

            <button
              className="g-lb-nav g-lb-next"
              onClick={() => setLightboxIndex(i => (i + 1) % visiblePhotos.length)}
              aria-label="Next image"
            >›</button>

            <div className="g-lb-meta">
              {lbPhoto.caption}
              {lbPhoto.description && ` — ${lbPhoto.description}`}
              <span style={{ opacity: 0.55, marginLeft: 10 }}>
                {lightboxIndex + 1} / {visiblePhotos.length}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Footer strip ── */}
      <footer className="g-footer">
        © 2026 IEEE Women in Engineering — Manipal University Jaipur.
        All frames, all filters, all real.
      </footer>

    </div>
  )
}

export default Gallery