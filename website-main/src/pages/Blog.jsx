import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Blog.css";

export const blogData = [
  { id: 14, title: "The Silent War: Nations Battling in Cyberspace", excerpt: "The next global conflict may never be declared — it could already be unfolding behind your screen.", imageUrl: "/blog14.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-silent-war-nations-battling-in-cyberspace-09bfb57daf9a" },
  { id: 13, title: "Beyond the Event Horizon", excerpt: "A blurry orange ring that changed astronomy forever — discover the technology that made the impossible visible.", imageUrl: "/blog13.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/beyond-the-event-horizon-how-technology-helped-humanity-capture-a-black-hole-98f20b5f8cf2" },
  { id: 12, title: "The Invisible Arms Race: How Quantum Computing Could Change Global Power", excerpt: "What if the future of global power isn't decided by weapons — but by a single qubit?", imageUrl: "/blog12.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-invisible-arms-race-how-quantum-computing-could-change-global-power-3bc1e65b904c" },
  { id: 11, excerpt: "Master essential techniques to clean messy data and turn raw numbers into reliable, actionable insights.", imageUrl: "/blog11.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50" },
  { id: 10, excerpt: "When technology hits its limits, human intuition steps in — explore the critical moments that define man vs machine.", imageUrl: "/blog10.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5" },
  { id: 9, excerpt: "Step into the metaverse — a beginner's guide to virtual worlds redefining how we live, work and connect.", imageUrl: "/blog9.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716" },
  { id: 8, excerpt: "In a world obsessed with data, where does gut feeling fit in? Explore the balance between intuition and logic.", imageUrl: "/blog8.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-inner-algorithm-balancing-intuition-and-logic-in-a-data-driven-world-f54a4a282f6c" },
  { id: 7, excerpt: "Engineering solves problems, but design thinking asks the right questions first — here's why it matters.", imageUrl: "/blog7.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/why-every-engineer-should-learn-design-thinking-971f8d897604" },
  { id: 6, excerpt: "What if learning wasn't about memorizing but discovering? A fresh take on breaking rote education.", imageUrl: "/blog6.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/disrupt-the-cycle-from-cramming-to-curiosity-8c06506a6bcc" },
  { id: 5, excerpt: "From unconscious human bias to algorithmic prejudice — how bias quietly shapes decisions in minds and machines.", imageUrl: "/blog5.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-hidden-biases-in-our-minds-and-machines-7bf9fa102a8c" },
  { id: 4, excerpt: "Everything you need to know about pursuing a Master's degree abroad — from choosing countries to packing your bags.", imageUrl: "/blog4.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/from-dreams-to-departure-your-complete-roadmap-to-a-masters-abroad-9a7b1f7d3eb1" },
  { id: 3, excerpt: "Why can't we stop scrolling? Dive into the psychology behind doomscrolling and how to find your way back.", imageUrl: "/blog3.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-endless-scroll-unraveling-the-psychology-of-doomscrolling-and-finding-our-way-back-0c5e3aacb8d9" },
  { id: 2, excerpt: "The syllabus is just the starting point — the most valuable learning happens outside the classroom.", imageUrl: "/blog2.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/control-alt-curiosity-why-every-student-should-explore-beyond-the-syllabus-4891ec6b7313" },
  { id: 1, excerpt: "The internet is evolving — from centralized giants to a decentralized future. Here's what Web 3.0 means for us.", imageUrl: "/blog1.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-decentralized-web-e348bf6829d2" },
];

const COLLAGE = [
  { bi: 0, pos: { top: '-2%', left: '0%' }, w: '14vw', rot: -9, ex: -130, ey: -80, er: -20, dl: 0 },
  { bi: 1, pos: { top: '17%', left: '1%' }, w: '12vw', rot: 5, ex: -135, ey: 0, er: 14, dl: 70 },
  { bi: 2, pos: { top: '36%', left: '0%' }, w: '13vw', rot: -5, ex: -135, ey: 0, er: -14, dl: 140 },
  { bi: 3, pos: { top: '55%', left: '1%' }, w: '12vw', rot: 7, ex: -135, ey: 0, er: 18, dl: 100 },
  { bi: 4, pos: { top: '74%', left: '0%' }, w: '14vw', rot: -6, ex: -130, ey: 80, er: -18, dl: 190 },
  { bi: 5, pos: { top: '-2%', right: '0%' }, w: '14vw', rot: 8, ex: 130, ey: -80, er: 20, dl: 20 },
  { bi: 6, pos: { top: '17%', right: '1%' }, w: '12vw', rot: -5, ex: 135, ey: 0, er: -14, dl: 50 },
  { bi: 7, pos: { top: '36%', right: '0%' }, w: '13vw', rot: 5, ex: 135, ey: 0, er: 14, dl: 130 },
  { bi: 8, pos: { top: '55%', right: '1%' }, w: '12vw', rot: -7, ex: 135, ey: 0, er: -18, dl: 90 },
  { bi: 9, pos: { top: '74%', right: '0%' }, w: '14vw', rot: 6, ex: 130, ey: 80, er: 18, dl: 170 },
  { bi: 10, pos: { top: '-6%', left: '29%' }, w: '13vw', rot: -4, ex: -15, ey: -135, er: -10, dl: 30 },
  { bi: 11, pos: { top: '-6%', left: '54%' }, w: '12vw', rot: 5, ex: 15, ey: -135, er: 12, dl: 40 },
  { bi: 12, pos: { bottom: '-6%', left: '29%' }, w: '13vw', rot: 4, ex: -15, ey: 135, er: 10, dl: 220 },
  { bi: 13, pos: { bottom: '-6%', left: '54%' }, w: '12vw', rot: -5, ex: 15, ey: 135, er: -12, dl: 250 },
];

const CSS_STARS = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37 % 93) + 3}%`,
  top: `${(i * 61 % 91) + 3}%`,
  size: 1 + (i % 3) * 0.45,
  dur: `${2.5 + (i % 5) * 1.2}s`,
  del: `${(i % 6) * 0.5}s`,
}));

function CollageSplash({ onDone }) {
  const [phase, setPhase] = useState("hidden");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 60);
    const t2 = setTimeout(() => setPhase("exiting"), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(onDone, 950);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  const handleClick = useCallback(() => {
    if (phase === "visible") setPhase("exiting");
  }, [phase]);

  const isVisible = phase === "visible";
  const isExiting = phase === "exiting";

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden",
        background: "linear-gradient(135deg,#06000f 0%,#180022 45%,#0e0018 100%)",
        cursor: "pointer",
      }}
    >
      {COLLAGE.map((item, i) => {
        const blog = blogData[item.bi];
        const { pos, w, rot, ex, ey, er, dl } = item;

        const transform = isExiting
          ? `rotate(${rot + er}deg) translate(${ex}vw,${ey}vh) scale(0.2)`
          : isVisible
            ? `rotate(${rot}deg) scale(1)`
            : `rotate(${rot}deg) scale(0.78)`;

        const transition = isExiting
          ? `transform 0.65s cubic-bezier(0.55,0,1,1) ${dl}ms, opacity 0.4s ease ${dl}ms`
          : `transform 0.75s cubic-bezier(0.23,1,0.32,1) ${i * 58}ms, opacity 0.65s ease ${i * 58}ms`;

        return (
          <div key={i} style={{
            position: "absolute", ...pos,
            width: w, aspectRatio: "3/4",
            borderRadius: "10px", overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.85), 0 0 0 1px rgba(244,114,182,0.22)",
            transform, opacity: isVisible ? 1 : 0,
            transition,
            willChange: "transform,opacity",
          }}>
            <img
              src={blog.imageUrl} alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="eager"
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(244,114,182,0.05)" }} />
          </div>
        );
      })}

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 46% 56% at 50% 50%, rgba(6,0,15,0.94) 0%, rgba(6,0,15,0.72) 42%, rgba(6,0,15,0.25) 72%, transparent 100%)",
        opacity: isExiting ? 0 : 1,
        transition: isExiting ? "opacity 0.5s ease" : "none",
      }} />

      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: phase === "hidden"
          ? "translate(-50%, -50%) scale(0.86)"
          : "translate(-50%, -50%)",
        transition: phase === "hidden"
          ? "transform 0.75s cubic-bezier(0.23,1,0.32,1), opacity 0.65s ease 0.3s"
          : "none",
        opacity: phase === "hidden" ? 0 : 1,
        pointerEvents: "none",
        zIndex: 10002,
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(2.8rem,6.5vw,6rem)", fontWeight: "800", margin: 0,
          background: "linear-gradient(90deg,#f9a8d4,#f472b6,#e879f9,#c026d3,#f472b6,#f9a8d4)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "titleShimmer 4s linear infinite",
          fontFamily: "'Montserrat',sans-serif",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          filter: "drop-shadow(0 0 28px rgba(244,114,182,0.5))",
        }}>
          OUR BLOGS
        </h1>

        <div style={{
          opacity: isExiting ? 0 : 1,
          transition: isExiting ? "opacity 0.22s ease" : "opacity 0.65s ease 0.5s",
        }}>
          <p style={{
            color: "rgba(244,114,182,0.65)", marginTop: "1rem",
            fontSize: "0.75rem", letterSpacing: "0.26em",
            textTransform: "uppercase", fontFamily: "'Montserrat',sans-serif",
            fontWeight: "500",
          }}>
            Stories &middot; Insights &middot; Ideas
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "0.8rem" }}>
            <div style={{ width: "55px", height: "1px", background: "linear-gradient(to right,transparent,#f472b6)" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f472b6", boxShadow: "0 0 8px #f472b6" }} />
            <div style={{ width: "55px", height: "1px", background: "linear-gradient(to left,transparent,#f472b6)" }} />
          </div>
          <p style={{
            marginTop: "1.5rem", fontSize: "0.6rem", letterSpacing: "0.32em",
            color: "rgba(244,114,182,0.4)", textTransform: "uppercase",
            fontFamily: "'Montserrat',sans-serif",
            animation: "hintPulse 2.2s ease-in-out infinite",
          }}>
            click &nbsp;to&nbsp; enter
          </p>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog, index }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (my - 0.5) * 13, y: -(mx - 0.5) * 13 });
    cardRef.current.style.setProperty("--mx", `${mx * 100}%`);
    cardRef.current.style.setProperty("--my", `${my * 100}%`);
  };

  const stagger = (index % 4) * 80;

  return (
    <div ref={wrapRef} style={{ perspective: "1000px" }}>
      <a
        href={blog.readMoreUrl} ref={cardRef}
        target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
        style={{
          display: "block", width: "100%", aspectRatio: "3/4",
          borderRadius: "14px", overflow: "hidden", cursor: "pointer",
          textDecoration: "none", position: "relative",
          background: hovered
            ? "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(244,114,182,0.13) 0%, rgba(18,0,35,0.55) 58%)"
            : "rgba(18,0,35,0.55)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          opacity: visible ? 1 : 0,
          transform: visible
            ? (hovered
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.055) translateY(-8px)`
              : "rotateX(0) rotateY(0) scale(1) translateY(0)")
            : "translateY(38px) scale(0.95)",
          transition: visible
            ? (hovered
              ? "transform 0.14s ease, box-shadow 0.14s ease"
              : `opacity 0.55s ease ${stagger}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${stagger}ms, box-shadow 0.4s ease`)
            : "none",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? "0 0 0 1.5px #f472b6, 0 0 32px rgba(244,114,182,0.45), 0 18px 36px rgba(0,0,0,0.5)"
            : "0 0 0 1px rgba(244,114,182,0.12), 0 6px 22px rgba(0,0,0,0.45)",
          willChange: "transform,opacity",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${blog.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(14px) brightness(0.32)", transform: "scale(1.12)", zIndex: 0 }} />
        <img
          src={blog.imageUrl} alt={`Blog ${blog.id}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", pointerEvents: "none", transition: "transform 0.45s ease", transform: hovered ? "scale(1.04)" : "scale(1)", zIndex: 1 }}
          loading="lazy"
        />
        {hovered && <div style={{ position: "absolute", inset: -1, borderRadius: "15px", zIndex: 10, pointerEvents: "none", border: "1.5px solid rgba(244,114,182,0.85)", boxShadow: "0 0 16px rgba(244,114,182,0.45)", animation: "neonPulse 1.4s ease-in-out infinite" }} />}
        {hovered && (
          <div style={{ position: "absolute", inset: 0, zIndex: 6, pointerEvents: "none", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "-100%", width: "55%", height: "100%", background: "linear-gradient(105deg,transparent,rgba(255,255,255,0.06),transparent)", animation: "shimmerSweep 1.3s ease-in-out infinite" }} />
          </div>
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem 0.9rem 0.95rem", background: "linear-gradient(to top,rgba(6,0,15,0.97) 0%,rgba(6,0,15,0.7) 55%,transparent 100%)", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.3s ease,transform 0.3s ease", zIndex: 7 }}>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,210,240,0.88)", margin: "0 0 0.5rem", lineHeight: "1.6", fontFamily: "'Montserrat',sans-serif", fontWeight: "400" }}>{blog.excerpt}</p>
          <span style={{ fontSize: "0.68rem", color: "#f9a8d4", fontFamily: "'Montserrat',sans-serif", fontWeight: "600", letterSpacing: "0.04em" }}>Read on Medium &rarr;</span>
        </div>
      </a>
    </div>
  );
}

function HeroTitle() {
  return (
    <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "520px", height: "130px",
        background: "rgba(244,114,182,0.22)",
        filter: "blur(44px)",
        borderRadius: "50%",
        animation: "pinkGlow 4s ease-in-out infinite",
        zIndex: -1, pointerEvents: "none",
      }} />

      <h1 style={{
        fontSize: "clamp(2.8rem,6.5vw,6rem)", fontWeight: "800", margin: 0,
        background: "linear-gradient(90deg,#f9a8d4,#f472b6,#e879f9,#c026d3,#f472b6,#f9a8d4)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        animation: "titleShimmer 4s linear infinite",
        fontFamily: "'Montserrat',sans-serif",
        letterSpacing: "-0.01em",
        filter: "drop-shadow(0 0 28px rgba(244,114,182,0.55))",
      }}>
        OUR BLOGS
      </h1>

      <p style={{ color: "rgba(244,114,182,0.65)", marginTop: "0.9rem", fontSize: "0.75rem", letterSpacing: "0.26em", textTransform: "uppercase", fontFamily: "'Montserrat',sans-serif", fontWeight: "500" }}>
        Stories &middot; Insights &middot; Ideas
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "1rem" }}>
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right,transparent,#f472b6)" }} />
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f472b6", boxShadow: "0 0 8px #f472b6" }} />
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left,transparent,#f472b6)" }} />
      </div>
    </div>
  );
}

function ScrollHint() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (ref.current) ref.current.style.opacity = String(Math.max(0, 1 - window.scrollY / 110));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} style={{ marginTop: "1.5rem", color: "rgba(244,114,182,0.5)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      scroll to explore
      <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom,#f472b6,transparent)", animation: "scrollLine 1.8s ease-in-out infinite" }} />
    </div>
  );
}

function ArticleStrip() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const show = window.scrollY > 80;
      ref.current.style.opacity = show ? "1" : "0";
      ref.current.style.transform = show ? "translateY(0)" : "translateY(18px)";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem", opacity: "0", transform: "translateY(18px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right,transparent,rgba(244,114,182,0.4))" }} />
      <span style={{ fontSize: "0.65rem", color: "rgba(244,114,182,0.6)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: "600" }}>{blogData.length} Articles</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left,transparent,rgba(244,114,182,0.4))" }} />
    </div>
  );
}

export default function Blog() {
  const [splashDone, setSplashDone] = useState(false);
  const handleDone = useCallback(() => setSplashDone(true), []);

  return (
    <div style={{
      position: "relative", minHeight: "100vh",
      background: "#06000f",
      color: "white",
      padding: "0 0 5rem",
      marginTop: "-6rem",
      fontFamily: "'Montserrat', sans-serif",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        @keyframes titleShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes hintPulse {
          0%,100% { opacity:.35; }
          50%      { opacity:.75; }
        }
        @keyframes pinkGlow {
          0%,100% { opacity:.35; transform:scale(1); }
          50%      { opacity:.7;  transform:scale(1.06); }
        }
        @keyframes starTwinkle {
          0%,100% { opacity:.15; }
          50%      { opacity:.85; }
        }
        @keyframes neonPulse {
          0%,100% { box-shadow:0 0 14px rgba(244,114,182,.45); }
          50%      { box-shadow:0 0 32px rgba(244,114,182,.85); }
        }
        @keyframes shimmerSweep {
          0%   { left:-100%; }
          100% { left:200%; }
        }
        @keyframes scrollLine {
          0%,100% { transform:scaleY(1);   opacity:.7; }
          50%      { transform:scaleY(1.3); opacity:.3; }
        }
        @keyframes orbitRing {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }

        ::-webkit-scrollbar       { width:0; background:transparent; }
        * { scrollbar-width: none; }

        @media (max-width:1100px) { .blog-grid { grid-template-columns:repeat(3,1fr)!important; } }
        @media (max-width:760px)  { .blog-grid { grid-template-columns:repeat(2,1fr)!important; } }
        @media (max-width:480px)  { .blog-grid { grid-template-columns:1fr!important; } }
      `}</style>

      {/* ── Conditional Splash Screen ── */}
      {!splashDone ? (
        <CollageSplash onDone={handleDone} />
      ) : (
        <div style={{ position: "relative", zIndex: 10 }}>

          {/* Background Ambient Layers */}
          <div style={{ position: "fixed", top: "-5%", left: "4%", width: "440px", height: "440px", background: "rgba(244,114,182,0.07)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", animation: "pinkGlow 5s ease-in-out infinite", zIndex: 1 }} />
          <div style={{ position: "fixed", top: "35%", right: "2%", width: "340px", height: "340px", background: "rgba(192,38,211,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", animation: "pinkGlow 6s ease-in-out 2s infinite", zIndex: 1 }} />

          {/* Twinkling Stars */}
          <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            {CSS_STARS.map((s, i) => (
              <div key={i} style={{
                position: "absolute", left: s.left, top: s.top,
                width: `${s.size}px`, height: `${s.size}px`,
                borderRadius: "50%", background: "rgba(255,180,230,0.9)",
                animation: `starTwinkle ${s.dur} ease-in-out ${s.del} infinite`,
              }} />
            ))}
          </div>

          {/* Static SVG Triangle Grid */}
          <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.055, pointerEvents: "none", zIndex: 1 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tri" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 55,50 5,50" fill="none" stroke="#f472b6" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tri)" />
          </svg>

          {/* ── Hero Centerpiece with Orbiting Rings ── */}
          <div style={{
            position: "relative", zIndex: 10,
            height: "100vh",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Outer slow ring */}
              <div style={{
                position: "absolute",
                width: "clamp(340px,44vw,680px)", height: "clamp(340px,44vw,680px)",
                border: "1px solid rgba(244,114,182,0.15)",
                borderRadius: "50%",
                animation: "orbitRing 22s linear infinite",
                pointerEvents: "none",
              }}>
                <div style={{ position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", width: "10px", height: "10px", borderRadius: "50%", background: "#f472b6", boxShadow: "0 0 12px #f472b6, 0 0 24px rgba(244,114,182,0.5)" }} />
              </div>

              {/* Inner fast ring */}
              <div style={{
                position: "absolute",
                width: "clamp(260px,34vw,520px)", height: "clamp(260px,34vw,520px)",
                border: "1px solid rgba(192,38,211,0.18)",
                borderRadius: "50%",
                animation: "orbitRing 14s linear infinite reverse",
                pointerEvents: "none",
              }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%)", width: "7px", height: "7px", borderRadius: "50%", background: "#c026d3", boxShadow: "0 0 10px #c026d3" }} />
              </div>

              <HeroTitle />
            </div>

            <div style={{ position: "absolute", bottom: "2.5rem" }}>
              <ScrollHint />
            </div>
          </div>

          {/* ── Main Blog Articles Grid ── */}
          <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "2rem auto 6rem", padding: "0 2rem" }}>
            <ArticleStrip />
            <div
              className="blog-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.4rem" }}
            >
              {blogData.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}