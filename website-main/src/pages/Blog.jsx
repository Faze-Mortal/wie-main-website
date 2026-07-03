import React from "react";

const blogData = [
  {
    id: 3,
    title: "Data Cleaning Techniques Every Analyst Should Know",
    author: "Chinmayee Khanna",
    imageUrl: "/blog11.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50",
  },
  {
    id: 2,
    title: "What Happens When Systems Fail-And Humans Take Over",
    author: "Ashita Saxena",
    imageUrl: "/blog10.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5",
  },
  {
    id: 1,
    title: "Exploring the Metaverse: Your Guide to the Virtual Universe",
    author: "Shreya Singh",
    imageUrl: "/blog9.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716",
  },
];

const cardStyle = {
  background: "rgba(88, 28, 135, 0.25)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(236, 72, 153, 0.25)",
  borderRadius: "1rem",
  overflow: "hidden",
  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
  cursor: "pointer",
  display: "block",
  width: "300px",
};

const cardHoverStyle = {
  transform: "scale(1.07)",
  boxShadow: "0 0 32px rgba(236, 72, 153, 0.45), 0 0 8px rgba(168, 85, 247, 0.3)",
  border: "1px solid rgba(236, 72, 153, 0.7)",
};

function BlogCard({ blog }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={blog.readMoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={blog.imageUrl}
        alt={blog.title}
        style={{
          width: "100%",
          height: "192px",
          objectFit: "cover",
          transition: "transform 0.35s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", color: hovered ? "#f9a8d4" : "#ffffff", lineHeight: "1.4", transition: "color 0.3s ease" }}>
          {blog.title}
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#f472b6" }}>By {blog.author}</p>
        <span style={{ fontSize: "0.75rem", color: hovered ? "#f9a8d4" : "#c084fc", transition: "color 0.3s ease", marginTop: "0.25rem" }}>
          Read on Medium →
        </span>
      </div>
    </a>
  );
}

export default function Blog() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg, #0a0010 0%, #1a0030 50%, #0a0010 100%)", color: "white", padding: "6rem 1.5rem 4rem", overflow: "hidden" }}>

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

      <div style={{ position: "absolute", top: 0, left: "20%", width: "400px", height: "400px", background: "rgba(126, 34, 206, 0.25)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: "20%", width: "400px", height: "400px", background: "rgba(190, 24, 93, 0.15)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", background: "linear-gradient(to right, #d8b4fe, #f9a8d4, #d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Our Blog
        </h1>
        <p style={{ color: "#a78bfa", marginTop: "0.75rem", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Stories, insights and ideas
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}