import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", color: "#aaa", padding: "40px 20px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        
        <p style={{ fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Bnox-Code. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>About</a>
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Blog</a>
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
