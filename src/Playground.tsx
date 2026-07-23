import { useState } from "react";

export default function Playground() {
  const [code, setCode] =
    useState(`<div style="padding: 20px; font-family: sans-serif;">
  <h1>HTML & JS Playground</h1>
  <p>Write your HTML and JavaScript here!</p>
  <button onclick="alert('Hello from JS!')">Click me</button>
</div>`);

  const [output, setOutput] = useState(code);

  const handleRun = () => {
    setOutput(code);
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f5f5f5" }}>
      {/* Code Editor */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
        }}
      >
        <h2>HTML & JavaScript</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            fontFamily: "monospace",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleRun}
          style={{
            padding: "10px 20px",
            background: "#0b132b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Run Code
        </button>
      </div>

      {/* Preview */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "white",
          borderLeft: "1px solid #ccc",
        }}
      >
        <h2>Preview</h2>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "20px",
            height: "calc(100% - 60px)",
            overflowY: "auto",
            background: "white",
          }}
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </div>
    </div>
  );
}
