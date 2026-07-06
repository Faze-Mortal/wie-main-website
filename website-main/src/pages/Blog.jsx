import React, { useRef, useState } from "react";

const blogData = [
  { id: 14, excerpt: "The next global conflict may never be declared—it could already be unfolding behind your screen...", imageUrl: "/blog14.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-silent-war-nations-battling-in-cyberspace-09bfb57daf9a?source=friends_link&sk=41fb7632dbdaa9ebebaf86b874cc540d" },
  { id: 13, excerpt: "A blurry orange ring that changed astronomy FOREVER. Discover the technology that made the impossible visible-.", imageUrl: "/blog13.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-invisible-arms-race-how-quantum-computing-could-change-global-power-3bc1e65b904c?source=friends_link&sk=c766f63b8b0553b99bdd10a97846e338" },
  { id: 12, excerpt: "What if the future of global power isn't decided by weapons—but by a single qubit?                    ", imageUrl: "/blog12.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-invisible-arms-race-how-quantum-computing-could-change-global-power-3bc1e65b904c?source=friends_link&sk=c766f63b8b0553b99bdd10a97846e338" },
  { id: 11, excerpt: "Master essential techniques to clean messy data and turn raw numbers into reliable, actionable insights.", imageUrl: "/blog11.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50" },
  { id: 10, excerpt: "When technology hits its limits, human intuition steps in — explore the critical moments that define man vs machine.", imageUrl: "/blog10.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5" },
  { id: 9, excerpt: "Step into the metaverse — a beginner's guide to virtual worlds redefining how we live, work and connect.", imageUrl: "/blog9.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716" },
  { id: 8, excerpt: "In a world obsessed with data, where does gut feeling fit in? Explore the balance between intuition and cold hard logic.", imageUrl: "/blog8.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-inner-algorithm-balancing-intuition-and-logic-in-a-data-driven-world-f54a4a282f6c" },
  { id: 7, excerpt: "Engineering solves problems, but design thinking asks the right questions first.", imageUrl: "/blog7.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/why-every-engineer-should-learn-design-thinking-971f8d897604" },
  { id: 6, excerpt: "What if learning wasn't about memorizing but discovering? A fresh take on breaking rote education.", imageUrl: "/blog6.jpeg", readMoreUrl: "https://medium.com/@ieee.wiemuj/disrupt-the-cycle-from-cramming-to-curiosity-8c06506a6bcc" },
  { id: 5, excerpt: "From unconscious human bias to algorithmic prejudice — how bias shapes decisions in minds and machines alike.", imageUrl: "/blog5.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-hidden-biases-in-our-minds-and-machines-7bf9fa102a8c" },
  { id: 4, excerpt: "Everything you need to know about pursuing a Master's degree abroad — from choosing countries to packing your bags.", imageUrl: "/blog4.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/from-dreams-to-departure-your-complete-roadmap-to-a-masters-abroad-9a7b1f7d3eb1" },
  { id: 3, excerpt: "Why can't we stop scrolling? Dive into the psychology behind doomscrolling and how to find your way back.", imageUrl: "/blog3.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-endless-scroll-unraveling-the-psychology-of-doomscrolling-and-finding-our-way-back-0c5e3aacb8d9" },
  { id: 2, excerpt: "The syllabus is just the starting point — the most valuable learning happens outside the classroom.", imageUrl: "/blog2.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/control-alt-curiosity-why-every-student-should-explore-beyond-the-syllabus-4891ec6b7313" },
  { id: 1, excerpt: "The internet is evolving — from centralized giants to a decentralized future. Here's what Web 3.0 means for us.", imageUrl: "/blog1.jpg", readMoreUrl: "https://medium.com/@ieee.wiemuj/the-decentralized-web-e348bf6829d2" },
]

function SparkBurst({ x, y }) {
  return (
    <div style={{ position: "fixed", left: x, top: y, pointerEvents: "none", zIndex: 9999 }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: "absolute", width: "5px", height: "5px", borderRadius: "50%",
          background: i % 2 === 0 ? "#f472b6" : "#e879f9",
          boxShadow: `0 0 8px ${i % 2 === 0 ? "#f472b6" : "#e879f9"}`,
          animation: `spark${i} 0.65s ease-out forwards`,
        }} />
      ))}
    </div>
  );
}

function BlogCard({ blog }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setTilt({ x: ((e.clientY - rect.top) / rect.height - 0.5) * 14, y: ((e.clientX - rect.left) / rect.width - 0.5) * -14 });
    setShimmerPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <div style={{ perspective: "900px", flexShrink: 0, width: "260px", scrollSnapAlign: "center" }}>
      <a
        ref={cardRef}
        href={blog.readMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
        style={{
          display: "flex", flexDirection: "column", width: "260px",
          borderRadius: "1.25rem", overflow: "hidden", cursor: "pointer",
          textDecoration: "none", position: "relative",
          transition: hovered ? "box-shadow 0.2s ease" : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
          transform: hovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.07) translateY(-10px)`
            : "rotateX(0) rotateY(0) scale(1) translateY(0)",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? "0 0 0 2px #f472b6, 0 0 45px rgba(244,114,182,0.7), 0 25px 50px rgba(0,0,0,0.5)"
            : "0 0 0 1px rgba(244,114,182,0.25), 0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        {hovered && (
          <div style={{
            position: "absolute", inset: -2, borderRadius: "1.4rem", zIndex: 10,
            pointerEvents: "none", border: "2px solid rgba(244,114,182,0.85)",
            boxShadow: "0 0 20px rgba(244,114,182,0.6), inset 0 0 15px rgba(244,114,182,0.1)",
            animation: "neonPulse 1.3s ease-in-out infinite",
          }} />
        )}

        {hovered && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none", borderRadius: "1.25rem",
            background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(244,114,182,0.18) 0%, transparent 60%)`,
          }} />
        )}

        {hovered && [0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            position: "absolute", top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? "-4px" : "calc(100% + 1px)",
            width: "3px", height: "3px", borderRadius: "50%",
            background: i % 2 === 0 ? "#f472b6" : "#e879f9",
            boxShadow: `0 0 5px ${i % 2 === 0 ? "#f472b6" : "#e879f9"}`,
            animation: `floatSpark 1.5s ease-in-out ${i * 0.2}s infinite`,
            zIndex: 20, pointerEvents: "none",
          }} />
        ))}

        {/* Image — contain so full poster visible, no crop */}
        <div style={{ width: "260px", height: "320px", background: "#0a0010", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", pointerEvents: "none" }}
          />
        </div>

        {/* Bottom blurred bg */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${blog.imageUrl})`,
            backgroundSize: "cover", backgroundPosition: "bottom",
            filter: "blur(10px) brightness(0.4)", transform: "scale(1.15)",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(60,0,30,0.55))" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "1rem 1rem 1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <h2 style={{ fontSize: "0.85rem", fontWeight: "700", color: hovered ? "#f9a8d4" : "#fff", lineHeight: "1.5", margin: 0, transition: "color 0.3s" }}>
              {blog.title}
            </h2>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,200,230,0.88)", margin: 0, lineHeight: "1.6" }}>
              {blog.excerpt}
            </p>
            <span style={{ fontSize: "0.7rem", color: hovered ? "#f9a8d4" : "#f472b6", marginTop: "0.3rem", transition: "color 0.3s" }}>
              Read on Medium →
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Blog() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [sparks, setSparks] = useState([]);
  const [sliding, setSliding] = useState(null);

  const triggerSparks = (e, dir) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setSparks(prev => [...prev, { id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }]);
    setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 700);
    setSliding(dir);
    trackRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    setTimeout(() => setSliding(null), 400);
  };

  const onMouseDown = (e) => { isDragging.current = true; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeft.current = trackRef.current.scrollLeft; trackRef.current.style.cursor = "grabbing"; };
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); trackRef.current.scrollLeft = scrollLeft.current - (e.pageX - trackRef.current.offsetLeft - startX.current) * 1.5; };
  const onMouseUp = () => { isDragging.current = false; if (trackRef.current) trackRef.current.style.cursor = "grab"; };
  const onTouchStart = (e) => { startX.current = e.touches[0].pageX; scrollLeft.current = trackRef.current.scrollLeft; };
  const onTouchMove = (e) => { trackRef.current.scrollLeft = scrollLeft.current + (startX.current - e.touches[0].pageX) * 1.5; };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg,#0a0010 0%,#1e0028 45%,#0a0010 100%)", color: "white", padding: "5rem 0 3rem", overflow: "hidden" }}>
      <style>{`
        @keyframes neonPulse{0%,100%{box-shadow:0 0 20px rgba(244,114,182,0.6),inset 0 0 12px rgba(244,114,182,0.1);}50%{box-shadow:0 0 40px rgba(244,114,182,0.95),inset 0 0 25px rgba(244,114,182,0.2);}}
        @keyframes floatSpark{0%,100%{transform:translateY(0) scale(1);opacity:1;}50%{transform:translateY(-12px) scale(1.4);opacity:0.5;}}
        @keyframes spark0{to{transform:translate(55px,-65px) scale(0);opacity:0;}}
        @keyframes spark1{to{transform:translate(-55px,-65px) scale(0);opacity:0;}}
        @keyframes spark2{to{transform:translate(75px,15px) scale(0);opacity:0;}}
        @keyframes spark3{to{transform:translate(-75px,15px) scale(0);opacity:0;}}
        @keyframes spark4{to{transform:translate(35px,75px) scale(0);opacity:0;}}
        @keyframes spark5{to{transform:translate(-35px,75px) scale(0);opacity:0;}}
        @keyframes spark6{to{transform:translate(65px,-20px) scale(0);opacity:0;}}
        @keyframes spark7{to{transform:translate(-65px,-20px) scale(0);opacity:0;}}
        @keyframes pinkPulse{0%,100%{opacity:0.5;}50%{opacity:0.9;}}
        div::-webkit-scrollbar{display:none;}
      `}</style>

      {sparks.map(s => <SparkBurst key={s.id} x={s.x} y={s.y} />)}

      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="tri" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,5 55,50 5,50" fill="none" stroke="#f472b6" strokeWidth="0.8" />
          <polygon points="0,0 25,45 -25,45" fill="none" stroke="#a855f7" strokeWidth="0.5" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#tri)" />
      </svg>
      <div style={{ position: "absolute", top: 0, left: "15%", width: "500px", height: "500px", background: "rgba(244,114,182,0.1)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", animation: "pinkPulse 4s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: 0, right: "15%", width: "400px", height: "400px", background: "rgba(192,38,211,0.1)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", animation: "pinkPulse 5s ease-in-out 1.5s infinite" }} />

      <div style={{ textAlign: "center", marginBottom: "2.5rem", position: "relative", zIndex: 10 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", margin: 0, background: "linear-gradient(to right,#f9a8d4,#f472b6,#e879f9,#f9a8d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Our Blogs
        </h1>
        <p style={{ color: "#f472b6", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.7 }}>
          Stories · Insights · Ideas
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <button onClick={(e) => triggerSparks(e, -1)} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(244,114,182,0.15)", border: "1.5px solid rgba(244,114,182,0.6)", backdropFilter: "blur(8px)", color: "#f9a8d4", borderRadius: "50%", width: "50px", height: "50px", fontSize: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(244,114,182,0.4)" }}>‹</button>

        <div
          ref={trackRef}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove}
          style={{ display: "flex", gap: "1.5rem", overflowX: "auto", overflowY: "visible", padding: "2rem 5rem 2.5rem", cursor: "grab", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {blogData.map(blog => <BlogCard key={blog.id} blog={blog} />)}
        </div>

        <button onClick={(e) => triggerSparks(e, 1)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(244,114,182,0.15)", border: "1.5px solid rgba(244,114,182,0.6)", backdropFilter: "blur(8px)", color: "#f9a8d4", borderRadius: "50%", width: "50px", height: "50px", fontSize: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(244,114,182,0.4)" }}>›</button>
      </div>

      <p style={{ textAlign: "center", color: "rgba(244,114,182,0.4)", fontSize: "0.72rem", marginTop: "0.5rem", letterSpacing: "0.12em" }}>
        ← drag, swipe or click arrows to explore →
      </p>
    </div>
  );
}