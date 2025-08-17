import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Просто переходим на IDE без проверки
    navigate("/ide");
  };

  return (
    <div
      style={{
        backgroundColor: "#0f1117",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#1f2028",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
          Sign In
        </h2>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSignIn}
        >
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid #333",
              backgroundColor: "#0f1117",
              color: "white",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid #333",
              backgroundColor: "#0f1117",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              cursor: "pointer",
            }}
          >
            <FcGoogle size={24} />
          </a>

          <a
            href="https://github.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#24292f",
              cursor: "pointer",
            }}
          >
            <FaGithub color="white" size={24} />
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#9ca3af", fontSize: "14px" }}>
          Don’t have an account? <span style={{ color: "#2563eb", cursor: "pointer" }}>Register</span>
        </p>
      </div>
    </div>
  );
}
