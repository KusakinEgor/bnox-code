import React from 'react';

export default function Body() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", color: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "40px" }}>
          Why Choose Our Platform?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🚀 Fast</h3>
            <p style={{ color: "#555" }}>Optimized for performance and scalability.</p>
          </div>

          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🔒 Secure</h3>
            <p style={{ color: "#555" }}>Enterprise-level security by default.</p>
          </div>

          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚡ Reliable</h3>
            <p style={{ color: "#555" }}>99.99% uptime and trusted worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
