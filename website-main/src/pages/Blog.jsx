import React from "react";

const blogData = [
  {
    id: 3,
    author: "Chinmayee Khanna",
    excerpt: "Master essential techniques to clean messy data and turn raw numbers into reliable, actionable insights.",
    imageUrl: "/blog11.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50",
  },
  {
    id: 2,
    author: "Ashita Saxena",
    excerpt: "When technology hits its limits, human intuition steps in — explore the moments that define man vs machine.",
    imageUrl: "/blog10.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5",
  },
  {
    id: 1,
    author: "Shreya Singh",
    excerpt: "Step into the metaverse — a beginner's guide to the virtual worlds redefining how we connect and create.",
    imageUrl: "/blog9.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716",
  },
];

function BlogCard({ blog }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={blog.readMoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        borderRadius: "1.25rem",
        overflow: "hidden",
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        boxShadow: hovered
          ? "0 0 0 2px rgba(236,72,153,0.9), 0 0 35px rgba(236,72,153,0.45), 0 0 70px rgba(168,85,247,0.25)"
          : "0 0 0 1px rgba(236,72,153,0.25), 0 0 18px rgba(168,85,247,0.15)",
      }}
    >
      {/* Full poster image - no crop, full height */}
      <img
        src={blog.imageUrl}
        alt={blog.title}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          transition: "transform 0.35s ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
        }}
      />

      {/* Bottom box: same poster as blurred translucent background */}
      <div style={{ position: "relative", overflow: "hidden" }}>

        {/* Blurred poster behind text */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${blog.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          filter: "blur(8px) brightness(0.45)",
          transform: "scale(1.15)",
        }} />

        {/* Semi-transparent dark tint */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,0,20,0.35)",
        }} />

        {/* Text */}
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

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.5rem",
            paddingTop: "0.5rem",
            borderTop: "1px solid rgba(236,72,153,0.25)",
          }}>
            <p style={{ fontSize: "0.74rem", color: "#f472b6", margin: 0 }}>
              By {blog.author}
            </p>
            <span style={{
              fontSize: "0.72rem",
              color: hovered ? "#f9a8d4" : "#a78bfa",
              transition: "color 0.3s ease",
            }}>
              Read on Medium →
            </span>
          </div>
        </div>
      </div>
    </a>
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