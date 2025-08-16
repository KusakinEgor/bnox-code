import React from "react";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px 40px",
        backgroundColor: "#0f1117", // тёмный фон
        borderBottom: "1px solid rgba(255,255,255,0.1)", // лёгкая линия снизу
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
        {/* Логотип */}
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            margin: 0,
          }}
        >
          Bnox<span style={{ color: "#3b82f6" }}>Code</span>
        </h1>

        {/* Навигация */}
        <nav style={{ display: "flex", gap: "24px" }}>
          <a
            href="#"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "#9ca3af")}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "#9ca3af")}
          >
            Features
          </a>
          <a
            href="#"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "#9ca3af")}
          >
            Contact
          </a>
        </nav>

        {/* Кнопка справа */}
        <button
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
          Get Started
        </button>
      </div>
    </header>
  );
}
