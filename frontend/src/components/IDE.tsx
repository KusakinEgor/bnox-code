import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export default function IDE() {
  const [tab, setTab] = useState<"js" | "python">("js");
  const [code, setCode] = useState({ js: "", python: "" });
  const [output, setOutput] = useState("");
  const [aiMessages, setAiMessages] = useState<{ role: string; text: string }[]>([]);
  const [aiInput, setAiInput] = useState("");

  const runCode = () => {
    if (tab === "js") {
      try {
        if (/print\s*\(/.test(code.js)) {
          throw new Error("❌ Ошибка: print() не существует в JavaScript!");
        }
        const result = eval(code.js);
        setOutput(String(result));
      } catch (err) {
        setOutput(String(err));
      }
    } else {
      setOutput("⚠ Python execution via backend later:\n" + code.python);
    }
  };

  const sendAiMessage = () => {
    if (!aiInput.trim()) return;
    const userMsg = { role: "user", text: aiInput };
    setAiMessages([...aiMessages, userMsg]);
    setAiInput("");

    // mock ответ ассистента через 1 секунду
    setTimeout(() => {
      setAiMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Привет! Я твой AI-ассистент. Пока я могу только имитировать ответы. Ты написал: "${userMsg.text}"` },
      ]);
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor: "#0f1117",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      {/* Левая панель: IDE */}
      <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Верхняя панель */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid #2a2c36",
          }}
        >
          <div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "glow 3s ease-in-out infinite alternate",
                margin: 0,
              }}
            >
              Web IDE
            </h2>
            <p style={{ fontSize: "14px", color: "#9ca3af", margin: "4px 0 0" }}>
              Write and run JavaScript & Python right in your browser
            </p>
          </div>

          <button
            onClick={runCode}
            style={{
              padding: "10px 20px",
              background: "linear-gradient(90deg, #2563eb, #1e40af)",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              border: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            Run
          </button>
        </div>

        {/* Вкладки */}
        <div style={{ display: "flex", marginBottom: "10px", gap: "10px" }}>
          {["js", "python"].map((t) => (
            <div
              key={t}
              onClick={() => setTab(t as "js" | "python")}
              style={{
                padding: "10px 20px",
                borderRadius: "8px 8px 0 0",
                backgroundColor: tab === t ? "#1f2028" : "#2a2c36",
                cursor: "pointer",
                fontWeight: tab === t ? "bold" : "normal",
                transition: "all 0.3s ease",
                boxShadow:
                  tab === t
                    ? "inset 0 -3px 0 #2563eb"
                    : "inset 0 -3px 0 transparent",
              }}
            >
              {t.toUpperCase()}
            </div>
          ))}
        </div>

        {/* Редактор */}
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            transition: "all 0.3s ease",
            background: "linear-gradient(to bottom right, #1f2028, #0f1117)",
          }}
        >
          <CodeMirror
            value={tab === "js" ? code.js : code.python}
            height="350px"
            theme="dark"
            extensions={[tab === "js" ? javascript() : python()]}
            onChange={(value) => setCode((prev) => ({ ...prev, [tab]: value }))}
          />
        </div>

        {/* Output */}
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#1f2028",
            borderRadius: "12px",
            minHeight: "120px",
            whiteSpace: "pre-wrap",
            transition: "all 0.5s ease",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          {output || "Output will appear here..."}
        </div>
      </div>

      {/* Правая панель: AI-ассистент */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#1f2028",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          maxHeight: "90vh",
          overflow: "hidden",
        }}
      >
        <h3 style={{ margin: 0, marginBottom: "10px", color: "#60a5fa" }}>AI Assistant</h3>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {aiMessages.map((m, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? "#2563eb" : "#374151",
                color: "white",
                padding: "8px 12px",
                borderRadius: "12px",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <input
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            placeholder="Write to AI..."
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#0f1117",
              color: "white",
            }}
            onKeyDown={(e) => e.key === "Enter" && sendAiMessage()}
          />
          <button
            onClick={sendAiMessage}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Glow animation */}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px #2563eb, 0 0 10px #3b82f6; }
          50% { text-shadow: 0 0 15px #60a5fa, 0 0 30px #3b82f6; }
          100% { text-shadow: 0 0 5px #2563eb, 0 0 10px #3b82f6; }
        }
      `}</style>
    </div>
  );
}
