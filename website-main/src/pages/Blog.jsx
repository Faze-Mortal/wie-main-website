import React, { useRef, useState } from "react";

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

function BlogCard({ blog }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * 15,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * -15,
    });
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <a
        href={blog.readMoreUrl}
        ref={cardRef}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
        style={{
          display: "block",
          width: "100%",
          /* 3:4 aspect ratio matching 1200x1600 portrait posters */
          aspectRatio: "3 / 4",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          textDecoration: "none",
          position: "relative",
          /* Frosted glass background for images smaller than card */
          background: "rgba(20, 0, 40, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: hovered
            ? "box-shadow 0.15s ease"
            : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
          transform: hovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.06) translateY(-10px)`
            : "rotateX(0) rotateY(0) scale(1) translateY(0)",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? "0 0 0 2px #f472b6, 0 0 50px rgba(244,114,182,0.7), 0 30px 60px rgba(0,0,0,0.6)"
            : "0 0 0 1px rgba(244,114,182,0.15), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Blurred poster as background fill for smaller images */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${blog.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px) brightness(0.5)",
          transform: "scale(1.15)",
          zIndex: 0,
        }} />

        {/* Actual poster — contain so full image shows, no crop */}
        <img
          src={blog.imageUrl}
          alt={`Blog ${blog.id}`}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            pointerEvents: "none",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            zIndex: 1,
          }}
        />

        {/* Neon border */}
        {hovered && (
          <div style={{
            position: "absolute", inset: -2, borderRadius: "18px", zIndex: 10,
            pointerEvents: "none",
            border: "2px solid rgba(244,114,182,0.9)",
            boxShadow: "0 0 25px rgba(244,114,182,0.6), inset 0 0 20px rgba(244,114,182,0.08)",
            animation: "neonPulse 1.4s ease-in-out infinite",
          }} />
        )}

        {/* Shimmer sweep */}
        {hovered && (
          <div style={{ position: "absolute", inset: 0, zIndex: 6, pointerEvents: "none", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{
              position: "absolute", top: 0, left: "-100%", width: "60%", height: "100%",
              background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.08), transparent)",
              animation: "shimmerSweep 1.2s ease-in-out infinite",
            }} />
          </div>
        )}

        {/* Edge sparks */}
        {hovered && [0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            position: "absolute",
            top: `${15 + i * 17}%`,
            left: i % 2 === 0 ? "-3px" : "calc(100% + 0px)",
            width: "4px", height: "4px", borderRadius: "50%",
            background: i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#e879f9" : "#fff",
            boxShadow: `0 0 8px ${i % 2 === 0 ? "#f472b6" : "#e879f9"}`,
            animation: `floatSpark 1.8s ease-in-out ${i * 0.25}s infinite`,
            zIndex: 20, pointerEvents: "none",
          }} />
        ))}

        {/* Hover overlay - description + read more */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "2.5rem 1rem 1.1rem",
          background: "linear-gradient(to top, rgba(8,0,18,0.97) 0%, rgba(8,0,18,0.75) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          zIndex: 7,
        }}>
          <p style={{
            fontSize: "0.72rem",
            color: "rgba(255,210,240,0.9)",
            margin: "0 0 0.6rem 0",
            lineHeight: "1.6",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "400",
          }}>
            {blog.excerpt}
          </p>
          <span style={{
            fontSize: "0.7rem", color: "#f9a8d4",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600", letterSpacing: "0.05em",
          }}>
            Read on Medium →
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Blog() {
  return (
    <div style={{
      position: "relative", minHeight: "100vh",
      background: "transparent",
      color: "white", padding: "5rem 2rem 5rem",
      fontFamily: "'Montserrat', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        @keyframes neonPulse {
          0%,100% { box-shadow: 0 0 20px rgba(244,114,182,0.55), inset 0 0 12px rgba(244,114,182,0.08); }
          50% { box-shadow: 0 0 45px rgba(244,114,182,0.95), inset 0 0 28px rgba(244,114,182,0.18); }
        }
        @keyframes floatSpark {
          0%,100% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-14px) scale(1.5); opacity: 0.4; }
        }
        @keyframes shimmerSweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes pinkGlow {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes titleShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>


      <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
        <h1 style={{
          fontSize: "3.5rem", fontWeight: "800", margin: 0,
          background: "linear-gradient(90deg, #f9a8d4, #f472b6, #e879f9, #c026d3, #f472b6, #f9a8d4)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "titleShimmer 4s linear infinite",
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "-0.02em",
        }}>
          Our Blogs
        </h1>
        <p style={{ color: "rgba(244,114,182,0.65)", marginTop: "0.6rem", fontSize: "0.75rem", letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}>
          Stories · Insights · Ideas
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "1rem" }}>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #f472b6)" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f472b6", boxShadow: "0 0 10px #f472b6" }} />
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, #f472b6)" }} />
        </div>
      </div>

      <div style={{
        position: "relative", zIndex: 10,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.25rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {blogData.map(blog => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
}