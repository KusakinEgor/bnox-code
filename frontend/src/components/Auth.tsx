import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { registerUser, loginUser } from "../api/api";

export default function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = isRegister
      ? await registerUser(email, username, password)
      : await loginUser(email, password);

    if (res.error) {
      alert(res.error);
      return;
    }

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
          {isRegister ? "Register" : "Sign In"}
        </h2>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          {isRegister && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#0f1117",
                color: "white",
                fontSize: "16px",
              }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {isRegister ? "Register" : "Sign In"}
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
            href="http://localhost:8000/login/google"
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
            href="http://localhost:8000/login/github"
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

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          {isRegister ? "Already have an account? " : "Don’t have an account? "}
          <span
            style={{ color: "#2563eb", cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Sign In" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}
