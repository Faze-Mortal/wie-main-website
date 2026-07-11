import { useState, useEffect, useRef, useCallback } from 'react'
import './Gallery.css'

/* ================================================================
   IMAGE DATA — real photos from /Gallery/
   Categories: flagship | workshops | celebrations | team
   ================================================================ */
const CATEGORIES = [
  { key: 'flagship',     label: 'Elysium' },
  { key: 'workshops',    label: 'Workshops' },
  { key: 'celebrations', label: 'Fun Moments' },
  { key: 'team',         label: 'Team Moments' },
]

export const galleryPhotos = [
  { id: 1,  src: '/Gallery/img1.jpg',  cat: 'team',         caption: 'Executive Committee',  description: 'ECs 24-25' },
  { id: 2,  src: '/Gallery/img2.jpg',  cat: 'flagship',     caption: 'Elysium',              description: 'Team Elysium' },
  { id: 3,  src: '/Gallery/img3.jpg',  cat: 'team',         caption: 'Pyaare JCs',           description: 'JCs 24-25' },
  { id: 4,  src: '/Gallery/img4.jpg',  cat: 'flagship',     caption: 'Elysium in the Hostel',description: 'Elysium 4 the win' },
  { id: 5,  src: '/Gallery/img5.jpg',  cat: 'team',         caption: 'EC Reel Shoot',        description: 'The team for EC reel 24-25' },
  { id: 6,  src: '/Gallery/img6.jpg',  cat: 'workshops',    caption: 'CCs in HardWired',     description: 'CCs on Top' },
  { id: 7,  src: '/Gallery/img7.jpg',  cat: 'workshops',    caption: 'Gyaan Session',        description: 'Shashwat bhaiya giving Gyaan' },
  { id: 8,  src: '/Gallery/img8.jpg',  cat: 'celebrations', caption: 'ATL Lab Masti',        description: 'JC masti in ATL Lab' },
  { id: 9,  src: '/Gallery/img9.jpg',  cat: 'celebrations', caption: 'Shopping Cart',        description: 'Srishti in a cart' },
  { id: 10, src: '/Gallery/img10.jpg', cat: 'celebrations', caption: 'Bhai Log',             description: 'Muscles and Masti' },
  { id: 11, src: '/Gallery/img11.jpg', cat: 'flagship',     caption: 'DataPulse Pitching',   description: 'Serious stuff' },
  { id: 12, src: '/Gallery/img12.jpg', cat: 'team',         caption: 'JCs in Audi',          description: 'Fun in silence' },
  { id: 13, src: '/Gallery/img13.jpg', cat: 'celebrations', caption: 'Bullying Ishani',      description: 'Haww Kashish' },
  { id: 14, src: '/Gallery/img14.jpg', cat: 'team',         caption: 'CnC Team',             description: 'Corp and Cur' },
  { id: 15, src: '/Gallery/img15.jpg', cat: 'team',         caption: 'Genesis',              description: 'CC Summit Times' },
  { id: 16, src: '/Gallery/img16.jpg', cat: 'flagship',     caption: 'Shridhar Sir',         description: 'I LOVE MANIPAL' },
  { id: 17, src: '/Gallery/img17.jpg', cat: 'flagship',     caption: 'DataPulse Judging',    description: 'Elysium Day 2' },
  { id: 18, src: '/Gallery/img18.jpg', cat: 'workshops',    caption: 'HardWired',            description: 'Elysium Day 2' },
  { id: 19, src: '/Gallery/img19.jpg', cat: 'flagship',     caption: 'NextTech',             description: 'Elysium Day 1' },
  { id: 20, src: '/Gallery/img20.jpg', cat: 'workshops',    caption: 'Tech Eden',            description: 'Speakers at Tech Eden' },
  { id: 21, src: '/Gallery/img21.jpg', cat: 'flagship',     caption: 'Group Photo',          description: 'Elysium Day 2' },
  { id: 22, src: '/Gallery/img22.jpg', cat: 'flagship',     caption: 'Elysium at ATL Lab',   description: 'ATL Lab Session' },
  { id: 23, src: '/Gallery/img23.jpg', cat: 'celebrations', caption: 'Reeti Riwaaz',         description: 'Group photo' },
  { id: 24, src: '/Gallery/img24.jpg', cat: 'celebrations', caption: 'Reeti Riwaaz',         description: 'JCs in Reeti Riwaaz' },
  { id: 25, src: '/Gallery/img25.jpg', cat: 'team',         caption: 'Dashing Team JC',      description: 'Reeti Riwaaz' },
]

/* filmstrip = photos duplicated for seamless loop */
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
      if (e.key === 'Escape')      closeLightbox()
      if (e.key === 'ArrowLeft')   setLightboxIndex(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length)
      if (e.key === 'ArrowRight')  setLightboxIndex(i => (i + 1) % visiblePhotos.length)
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
              <div className="g-card-tag">
                {CATEGORIES.find(c => c.key === p.cat)?.label}
              </div>
              <div className="g-card-caption">{p.caption}</div>
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