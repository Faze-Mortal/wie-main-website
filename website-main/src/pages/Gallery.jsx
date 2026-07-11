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
  { id: 1, src: '/Gallery/IMG-1.jpg', cat: 'elysium', caption: 'Elysium Family', description: 'Elyisum day 2' },
  { id: 2, src: '/Gallery/IMG-2.JPG', cat: 'reeti-riwaaz', caption: 'Tradition Together', description: 'reet riwaz 2025' },
  { id: 3, src: '/Gallery/IMG-3.JPG', cat: 'fun-moments', caption: 'Making Memories', description: 'fun moments' },
  { id: 4, src: '/Gallery/IMG-4.JPG', cat: 'group-photo', caption: 'Panel Perspectives', description: 'confluence panel group photo' },
  { id: 5, src: '/Gallery/IMG-5.JPG', cat: 'moments', caption: 'The Final Night', description: 'last night-desk of tenure' },
  { id: 6, src: '/Gallery/IMG-6.jpg', cat: 'elysium', caption: 'The Beginning', description: 'Elysium 1.0' },
  { id: 7, src: '/Gallery/IMG-7.jpg', cat: 'ieee-summit', caption: 'Summit Success', description: 'IEEE submit of 2025' },
  { id: 8, src: '/Gallery/IMG-8.jpg', cat: 'fun-moments', caption: 'Pure Joy', description: 'moments' },
  { id: 9, src: '/Gallery/IMG-9.jpg', cat: 'elysium', caption: 'Night Vibes', description: 'last night pump of elysium 20' },
  { id: 10, src: '/Gallery/IMG-10.jpg', cat: 'group-photo', caption: 'Ideas in Motion', description: "Elysium's confluence panel" },
  { id: 11, src: '/Gallery/IMG-11.jpg', cat: 'fun-moments', caption: 'Picture Perfect', description: 'moments' },
  { id: 12, src: '/Gallery/IMG-12.jpg', cat: 'group-photo', caption: 'A Warm Farewell', description: "confluence's panel see off" },
  { id: 13, src: '/Gallery/IMG-13.jpg', cat: 'moments', caption: 'Together We Learn', description: 'induleged particpit(moment)' },
  { id: 14, src: '/Gallery/IMG-14.jpg', cat: 'fun-moments', caption: 'Smiles All Around', description: 'momement' },
  { id: 15, src: '/Gallery/IMG-15.jpg', cat: 'elysium', caption: 'Her Verdict', description: 'her verdict(elysium 2.0)' },
  { id: 16, src: '/Gallery/IMG-16.jpg', cat: 'fun-moments', caption: 'Beyond the Event', description: 'fun' },
  { id: 17, src: '/Gallery/IMG-17.jpg', cat: 'moments', caption: 'Event Highlights', description: 'her verdict(elysium 2.0)' },
  { id: 18, src: '/Gallery/IMG-18.jpg', cat: 'fun-moments', caption: 'Captured Moments', description: 'fun' },
  { id: 19, src: '/Gallery/IMG-19.jpg', cat: 'moments', caption: 'Celebrating Together', description: 'her verdict(elysium 2.0)' },
  { id: 20, src: '/Gallery/IMG-20.JPG', cat: 'elysium', caption: 'Center Stage', description: "elysium's flex drop" },
  { id: 21, src: '/Gallery/IMG-21.jpg', cat: 'fun-moments', caption: 'Team Spirit', description: 'fun moments' },
  { id: 22, src: '/Gallery/IMG-22.jpg', cat: 'moments', caption: 'Unforgettable Moments', description: 'fun moments(uwu)' },
  { id: 23, src: '/Gallery/IMG-23.jpg', cat: 'reeti-riwaaz', caption: 'A Grand Finale', description: 'moments' },
  { id: 24, src: '/Gallery/IMG-24.jpg', cat: 'group-photo', caption: 'CC Summit', description: 'Reeti riwaz 2025 group photo closing' },
  { id: 25, src: '/Gallery/IMG-25.jpg', cat: 'group-photo', caption: 'Moments That Matter', description: 'cc ssumbit group photo' },
  { id: 26, src: '/Gallery/IMG-26.jpg', cat: 'moments', caption: 'Forever Together', description: 'fun' },
  { id: 27, src: '/Gallery/IMG-27.jpg', cat: 'cc-summit', caption: 'WIE at CC Summit', description: 'moments' },
  { id: 28, src: '/Gallery/IMG-28.jpg', cat: 'group-photo', caption: 'Through the Lens', description: 'cc sumbit group photo of wie' },
  { id: 29, src: '/Gallery/IMG-29.jpg', cat: 'fun-moments', caption: 'Friends Forever', description: 'moments' },
  { id: 30, src: '/Gallery/IMG-30.jpg', cat: 'synphere', caption: 'Synphere Nights', description: 'fun moments' },
  { id: 31, src: '/Gallery/IMG-31.jpg', cat: 'group-photo', caption: 'NWW Family', description: 'wie group photo synphere night photo' },
  { id: 32, src: '/Gallery/IMG-32.jpg', cat: 'group-photo', caption: 'Shared Smiles', description: 'nww group photo' },
  { id: 33, src: '/Gallery/IMG-33.jpg', cat: 'nww', caption: 'Innovation Together', description: 'moments' },
  { id: 34, src: '/Gallery/IMG-34.jpg', cat: 'moments', caption: 'One More Memory', description: 'nww' },
  { id: 35, src: '/Gallery/IMG-35.jpg', cat: 'moments', caption: 'Snapshots of Joy', description: 'moments' },
  { id: 36, src: '/Gallery/IMG-36.jpg', cat: 'fun-moments', caption: 'Just WIE Things', description: 'moments' },
  { id: 37, src: '/Gallery/IMG-37.jpg', cat: 'croptopia', caption: 'Croptopia', description: 'fun' },
  { id: 38, src: '/Gallery/IMG-38.jpg', cat: 'moments', caption: 'Circle of Strength', description: "croptopia's desk" },
  { id: 39, src: '/Gallery/IMG-39.jpg', cat: 'cc-summit', caption: 'A New Beginning', description: 'circle of distrcution' },
  { id: 40, src: '/Gallery/IMG-40.jpg', cat: 'fun-moments', caption: 'Unscripted', description: 'first cc celebbration' },
  { id: 41, src: '/Gallery/IMG-41.jpg', cat: 'fun-moments', caption: 'Living the Moment', description: 'fun mo' },
  { id: 42, src: '/Gallery/IMG-42.jpg', cat: 'cc-meet', caption: 'Committee Connect', description: 'fun moments' },
  { id: 43, src: '/Gallery/IMG-43.jpg', cat: 'moments', caption: 'Cherished Memories', description: 'cc meet' },
  { id: 44, src: '/Gallery/IMG-44.jpg', cat: 'promptopia', caption: 'Promptopia', description: 'moments' },
  { id: 45, src: '/Gallery/IMG-45.jpg', cat: 'group-photo', caption: 'The WIE Family', description: "promptopia's group photo" },
  { id: 46, src: '/Gallery/IMG-46.jpg', cat: 'moments', caption: 'Together Always', description: 'moments' },
  { id: 47, src: '/Gallery/IMG-47.jpg', cat: 'elysium', caption: 'Confluence United', description: 'moments' },
  { id: 48, src: '/Gallery/IMG-48.jpg', cat: 'group-photo', caption: 'One Frame', description: 'confluencs group photo' },
  { id: 49, src: '/Gallery/IMG-49.jpg', cat: 'moments', caption: 'Every Smile Counts', description: 'moments' },
  { id: 50, src: '/Gallery/IMG-50.jpg', cat: 'moments', caption: 'Creating Memories', description: 'moments' },
  { id: 51, src: '/Gallery/IMG-51.jpg', cat: 'moments', caption: 'Executive Excellence', description: 'moments' },
  { id: 52, src: '/Gallery/IMG-52.jpg', cat: 'group-photo', caption: 'The Grand Finale', description: "Ec's group photo's" },
  { id: 53, src: '/Gallery/IMG-53.jpg', cat: 'elysium', caption: 'Voices That Matter', description: "Elysium's closign" },
  { id: 54, src: '/Gallery/IMG-54.jpg', cat: 'group-photo', caption: 'Together Again', description: 'her verdit group photo' },
  { id: 55, src: '/Gallery/IMG-55.jpg', cat: 'elysium', caption: 'Opening the Dialogue', description: 'moments' },
  { id: 56, src: '/Gallery/IMG-56.jpg', cat: 'elysium', caption: 'The Journey Begins', description: 'confluence opening cermony' },
  { id: 57, src: '/Gallery/IMG-57.jpg', cat: 'moments', caption: 'Golden Memories', description: "Elysium's opening cermony" },
  { id: 58, src: '/Gallery/IMG-58.jpg', cat: 'fun-moments', caption: 'Laugh Out Loud', description: 'moments' },
  { id: 59, src: '/Gallery/IMG-59.jpg', cat: 'elysium', caption: 'Honouring Excellence', description: 'fun' },
  { id: 60, src: '/Gallery/IMG-60.jpg', cat: 'elysium', caption: 'Inspiring Voices', description: 'felistation of confluence Raghav gerg' },
  { id: 61, src: '/Gallery/IMG-61.jpg', cat: 'moments', caption: 'Picture This', description: "confluencs aishveria's speech" },
  { id: 62, src: '/Gallery/IMG-62.jpg', cat: 'elysium', caption: 'Lighting Up the Night', description: 'moments' },
  { id: 63, src: '/Gallery/IMG-63.jpg', cat: 'moments', caption: 'The Journey Continues', description: "elyesium's night pump" },
  { id: 64, src: '/Gallery/IMG-64.jpg', cat: 'moments', caption: 'One More Click', description: 'moments' },
  { id: 65, src: '/Gallery/IMG-65.jpg', cat: 'moments', caption: 'Crowd Conquest', description: 'moments' },
  { id: 66, src: '/Gallery/IMG-66.jpg', cat: 'group-photo', caption: 'Good Times', description: 'crowd conquest group photo' },
  { id: 67, src: '/Gallery/IMG-67.jpg', cat: 'moments', caption: 'Captured Forever', description: 'fun moments' },
  { id: 68, src: '/Gallery/IMG-68.jpg', cat: 'fun-moments', caption: 'Endless Smiles', description: 'moments' },
  { id: 69, src: '/Gallery/IMG-69.jpg', cat: 'fun-moments', caption: 'Simply Unforgettable', description: 'fun moments ono' },
  { id: 70, src: '/Gallery/IMG-70.jpg', cat: 'moments', caption: 'A Heartfelt Farewell', description: 'fun moments' },
  { id: 71, src: '/Gallery/IMG-71.jpg', cat: 'fun-moments', caption: 'Happiness in Frame', description: 'ec farwell' },
  { id: 72, src: '/Gallery/IMG-72.jpg', cat: 'moments', caption: 'Until Next Time', description: 'fun moments' },
  { id: 73, src: '/Gallery/IMG-73.jpg', cat: 'moments', caption: 'Late Night Memories', description: 'farewell' },
  { id: 74, src: '/Gallery/IMG-74.jpg', cat: 'moments', caption: 'One Team, One Journey', description: 'movements' }
];
const stripPhotos = [...galleryPhotos, ...galleryPhotos]

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

      {/* ── Ambient blobs ── */}


      {/* ── Hero ── */}
      <header className="g-hero">
        <div className="g-eyebrow">✦ Moments in Motion</div>
        <h1 className="g-title">GALLERY</h1>
        <p className="g-subtitle">
          A running frame of the talks, builds, celebrations and late-night
          sessions that make IEEE WIE MUJ what it is — captured one shutter
          click at a time.
        </p>
      </header>

      {/* ── Filmstrip ── */}
      <div className="g-filmstrip-wrap" aria-hidden="true">
        <div className="g-filmstrip">
          {stripPhotos.map((p, i) => (
            <img key={i} src={p.src} loading="lazy" alt="" />
          ))}
        </div>
      </div>

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