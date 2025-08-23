import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Bnox<span style={{ color: "#3b82f6" }}>Code</span>
        </h1>

        <nav style={{ display: "flex", gap: "24px" }}>
          <Link
            to="/"
            style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}
          >
            Home
          </Link>
          <Link
            to="/features"
            style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}
          >
            Features
          </Link>
          <Link
            to="/contact"
            style={{ color: "#9ca3af", textDecoration: "none", fontSize: "16px" }}
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => navigate("/auth")}
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
