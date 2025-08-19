import React from "react";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f1117",
        color: "white",
        padding: "20px",
        fontFamily: "monospace",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>User Profile</h1>
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          backgroundColor: "#1f2028",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <User size={50} color="white" />
        <div>
          <p style={{ margin: 0, fontSize: "18px" }}>Username: John Doe</p>
          <p style={{ margin: 0, fontSize: "14px", color: "#9ca3af" }}>Email: john@example.com</p>
        </div>
      </div>
      
      {/* Здесь можно добавить больше информации о пользователе */}
    </div>
  );
}
