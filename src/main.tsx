import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MikagamiPage from "./MikagamiPage";
import Playground from "./Playground";

function App() {
  const [showPlayground, setShowPlayground] = useState(false);

  return (
    <div>
      {showPlayground ? (
        <>
          <button
            onClick={() => setShowPlayground(false)}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 9999,
              padding: "8px 16px",
              background: "#48cae4",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ← Back to Event
          </button>
          <Playground />
        </>
      ) : (
        <>
          <button
            onClick={() => setShowPlayground(true)}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 9999,
              padding: "8px 16px",
              background: "#f3c68f",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Playground →
          </button>
          <MikagamiPage />
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
