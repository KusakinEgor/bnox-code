import React, { useState } from "react";
import { User } from "lucide-react";

const activity = Array(30).fill(0); // пока пустые плитки

export default function Profile() {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>, text: string) => {
    setTooltip({ text, x: e.clientX + 10, y: e.clientY + 10 });
  };
  const handleMouseOut = () => setTooltip(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f1117, #1f1f2e)",
        color: "white",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        gap: "40px",
      }}
    >
      {/* Карточка профиля */}
      <div
        style={{
          width: "400px",
          backgroundColor: "#1f2028",
          borderRadius: "16px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
          animation: "fadeIn 1s ease-in-out",
          gap: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2563eb, #60a5fa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px #2563eb",
            animation: "pulse 2s infinite",
          }}
        >
          <User size={60} color="white" />
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #60a5fa, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "glow 3s ease-in-out infinite alternate",
          }}
        >
          John Doe
        </h2>

        {/* Кнопка Edit Profile */}
        <button
          style={{
            marginTop: "8px",
            padding: "6px 14px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #2563eb, #60a5fa)",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Edit Profile
        </button>

        <p style={{ color: "#9ca3af", margin: "4px 0 0" }}>john@example.com</p>

        {/* Активность */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 20px)",
            gap: "4px",
            marginTop: "20px",
          }}
        >
          {activity.map((_, idx) => {
            const didCode = Math.random() > 0.5; // рандом для демонстрации
            return (
              <div
                key={idx}
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#2a2c36",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  handleMouseOver(e, didCode ? "You coded today!" : "No activity")
                }
                onMouseOut={handleMouseOut}
              />
            );
          })}
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            style={{
              position: "fixed",
              top: tooltip.y,
              left: tooltip.x,
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "12px",
              pointerEvents: "none",
              transition: "all 0.2s ease",
            }}
          >
            {tooltip.text}
          </div>
        )}
      </div>

      {/* Анимации */}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px #2563eb, 0 0 10px #60a5fa; }
          50% { text-shadow: 0 0 15px #60a5fa, 0 0 30px #2563eb; }
          100% { text-shadow: 0 0 5px #2563eb, 0 0 10px #60a5fa; }
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 20px #2563eb; }
          50% { transform: scale(1.05); box-shadow: 0 0 30px #60a5fa; }
          100% { transform: scale(1); box-shadow: 0 0 20px #2563eb; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
