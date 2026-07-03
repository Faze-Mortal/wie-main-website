import React, { useRef } from "react";

const blogData = [
  {
    id: 3,
    excerpt: "Master essential techniques to clean messy data and turn raw numbers into reliable, actionable insights.",
    imageUrl: "/blog11.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50",
  },
  {
    id: 2,
    excerpt: "When technology hits its limits, human intuition steps in — explore the moments that define man vs machine.",
    imageUrl: "/blog10.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5",
  },
  {
    id: 1,
    excerpt: "Step into the metaverse — a beginner's guide to the virtual worlds redefining how we connect and create.",
    imageUrl: "/blog9.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716",
  },
];

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  angle: (i / 12) * 360,
  delay: i * 0.08,
  size: Math.random() * 4 + 2,
}));

function BlogCard({ blog }) {
  const [hovered, setHovered] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [shimmerPos, setShimmerPos] = React.useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: ((y - cy) / cy) * 12,
      y: ((x - cx) / cx) * -12,
    });
    setShimmerPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: "800px", width: "320px" }}>
      <a
        ref={cardRef}
        href={blog.readMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          borderRadius: "1.25rem",
          overflow: "hidden",
          cursor: "pointer",
          textDecoration: "none",
          position: "relative",
          transition: hovered ? "box-shadow 0.2s ease" : "transform 0.5s ease, box-shadow 0.5s ease",
          transform: hovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 0 0 2px rgba(236,72,153,0.9), 0 0 40px rgba(236,72,153,0.6), 0 0 80px rgba(168,85,247,0.35), 0 20px 60px rgba(0,0,0,0.5)`
            : "0 0 0 1px rgba(236,72,153,0.25), 0 0 18px rgba(168,85,247,0.15)",
        }}
      >
        {/* Neon pulse ring */}
        {hovered && (
          <div style={{
            position: "absolute",
            inset: -3,
            borderRadius: "1.4rem",
            zIndex: 10,
            pointerEvents: "none",
            animation: "neonPulse 1.2s ease-in-out infinite",
            border: "2px solid rgba(236,72,153,0.7)",
            boxShadow: "0 0 15px rgba(236,72,153,0.5), inset 0 0 15px rgba(168,85,247,0.2)",
          }} />
        )}

        {/* Shimmer overlay */}
        {hovered && (
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
            borderRadius: "1.25rem",
            background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            transition: "background 0.05s ease",
          }} />
        )}

        {/* Particles */}
        {hovered && PARTICLES.map((p) => (
          <div key={p.id} style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.id % 2 === 0 ? "#f9a8d4" : "#c084fc",
            zIndex: 20,
            pointerEvents: "none",
            animation: `particle${p.id % 3} 1.5s ease-out ${p.delay}s infinite`,
            boxShadow: `0 0 6px ${p.id % 2 === 0 ? "#f9a8d4" : "#c084fc"}`,
          }} />
        ))}

        {/* Full poster */}
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Bottom box with blurred poster bg */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${blog.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            filter: "blur(8px) brightness(0.45)",
            transform: "scale(1.15)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 0%, rgba(5,0,20,0.35) 40%)",
          }} />

          <div style={{
            position: "relative",
            zIndex: 2,
            padding: "1.1rem 1.25rem 1.35rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
          }}>
            <h2 style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              color: hovered ? "#f9a8d4" : "#ffffff",
              lineHeight: "1.5",
              margin: 0,
              transition: "color 0.3s ease",
            }}>
              {blog.title}
            </h2>
            <p style={{
              fontSize: "0.76rem",
              color: "rgba(220,200,255,0.9)",
              margin: 0,
              lineHeight: "1.6",
            }}>
              {blog.excerpt}
            </p>
            <span style={{
              fontSize: "0.72rem",
              color: hovered ? "#f9a8d4" : "#a78bfa",
              transition: "color 0.3s ease",
              marginTop: "0.4rem",
            }}>
              Read on Medium →
            </span>
          </div>
        </div>
      </a>

      <style>{`
        @keyframes neonPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 15px rgba(236,72,153,0.5), inset 0 0 15px rgba(168,85,247,0.2); }
          50% { opacity: 0.6; box-shadow: 0 0 30px rgba(236,72,153,0.9), inset 0 0 25px rgba(168,85,247,0.4); }
        }
        @keyframes particle0 {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + ${Math.cos(0) * 80}px), calc(-50% + ${Math.sin(0) * 80}px)) scale(0); opacity: 0; }
        }
        @keyframes particle1 {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + ${Math.cos(2.1) * 80}px), calc(-50% + ${Math.sin(2.1) * 80}px)) scale(0); opacity: 0; }
        }
        @keyframes particle2 {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + ${Math.cos(4.2) * 80}px), calc(-50% + ${Math.sin(4.2) * 80}px)) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Blog() {
  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0010 0%, #1a0030 50%, #0a0010 100%)",
      color: "white",
      padding: "6rem 1.5rem 4rem",
      overflow: "hidden",
    }}>

      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="triangles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,5 55,50 5,50" fill="none" stroke="#a855f7" strokeWidth="0.8" />
            <polygon points="0,0 25,45 -25,45" fill="none" stroke="#ec4899" strokeWidth="0.5" />
            <polygon points="60,0 85,45 35,45" fill="none" stroke="#ec4899" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangles)" />
      </svg>

      <div style={{ position: "absolute", top: 0, left: "20%", width: "400px", height: "400px", background: "rgba(126,34,206,0.25)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: "20%", width: "400px", height: "400px", background: "rgba(190,24,93,0.15)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          background: "linear-gradient(to right, #d8b4fe, #f9a8d4, #d8b4fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
        }}>
          Our Blog
        </h1>
        <p style={{ color: "#a78bfa", marginTop: "0.75rem", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Stories, insights and ideas
        </p>
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}