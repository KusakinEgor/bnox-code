import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // хук для программной навигации

  return (
    <header
      style={{
        padding: "20px 40px",
        backgroundColor: "#0f1117",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white", margin: 0 }}>
          Bnox<span style={{ color: "#3b82f6" }}>Code</span>
        </h1>

        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}>Home</a>
          <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}>Features</a>
          <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}>Contact</a>
        </nav>

        {/* Кнопка Sign in */}
        <button
          onClick={() => navigate("/auth")} // ← сюда добавили навигацию
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Sign in
        </button>
      </div>
    </header>
  );
}
