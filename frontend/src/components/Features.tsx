import React from "react";

export default function Features() {
  return (
    <div
      style={{
        backgroundColor: "#0f1117",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          🚀 Features of{" "}
          <span>
            <span style={{ color: "white" }}>Bnox</span>
            <span style={{ color: "#3b82f6" }}>Code</span>
          </span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {["Online IDE", "AI Assistant", "Collaboration"].map((title, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#1f2028",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#3b82f6" }}>
                {title}
              </h3>
              <p style={{ color: "#9ca3af" }}>
                {{
                  "Online IDE": "Write and run code in the browser with real-time output.",
                  "AI Assistant": "Get smart code suggestions and explanations powered by AI.",
                  "Collaboration": "Share projects and collaborate with your team in real time.",
                }[title]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
