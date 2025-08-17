import React, { useState } from 'react';
import { checkAPI } from '../api/api';

export default function Hero() {
  const [responseData, setResponseData] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleLogin = async () => {
    const data = await checkAPI();
    setResponseData(data);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // координаты относительно центра блока
    const x = ((clientX - left) / width - 0.5) * 60; 
    const y = ((clientY - top) / height - 0.5) * 60;

    setOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        padding: "140px 20px",
        textAlign: "center",
        backgroundColor: "#0f1117",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Фон-плашка */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle at center, rgba(37, 99, 235, 0.4), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          transition: "transform 0.1s linear", // плавность
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Build the Future with Our Platform
        </h1>
        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 40px",
            color: "#9ca3af",
          }}
        >
          The most reliable infrastructure for your AI, apps, and business.
        </p>
        <button
          onClick={handleLogin}
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Get Started
        </button>

        {responseData && (
          <div
            style={{
              marginTop: "40px",
              textAlign: "left",
              maxWidth: "600px",
              marginInline: "auto",
            }}
          >
            {Object.entries(responseData).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
