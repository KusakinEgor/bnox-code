import React from 'react';

export default function Body() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", color: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Why Choose */}
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "40px" }}>
          Why Choose Our Platform?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#1a1d29" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🚀 Fast</h3>
            <p style={{ color: "#9ca3af" }}>Optimized for performance and scalability.</p>
          </div>

          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#1a1d29" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🔒 Secure</h3>
            <p style={{ color: "#9ca3af" }}>Enterprise-level security by default.</p>
          </div>

          <div style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#1a1d29" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚡ Reliable</h3>
            <p style={{ color: "#9ca3af" }}>99.99% uptime and trusted worldwide.</p>
          </div>
        </div>

        {/* How It Works */}
        <div style={{ marginTop: "100px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
            How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "40px" }}>
            <div style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#1a1d29" }}>
              <h3>✍️ Write Code</h3>
              <p style={{ color: "#9ca3af" }}>Type Python or JavaScript directly in the browser.</p>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#1a1d29" }}>
              <h3>▶️ Run Instantly</h3>
              <p style={{ color: "#9ca3af" }}>Click "Run" and see the output in real-time.</p>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#1a1d29" }}>
              <h3>📤 Share Easily</h3>
              <p style={{ color: "#9ca3af" }}>Generate a shareable link to your code snippet.</p>
            </div>
          </div>
        </div>

        {/* Supported Languages */}
        <div style={{ marginTop: "100px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
            Supported Languages
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "30px", flexWrap: "wrap" }}>
            <div style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#1a1d29", width: "220px" }}>
              <h3 style={{ fontSize: "20px" }}>🐍 Python</h3>
              <pre style={{ textAlign: "left", color: "#9ca3af", fontSize: "14px" }}>
{`print("Hello, World!")`}
              </pre>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#1a1d29", width: "220px" }}>
              <h3 style={{ fontSize: "20px" }}>⚡ JavaScript</h3>
              <pre style={{ textAlign: "left", color: "#9ca3af", fontSize: "14px" }}>
{`console.log("Hello, World!");`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
