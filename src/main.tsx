import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MikagamiPage from "./MikagamiPage";
import TicketPage from "./TicketPage";
import CompletePage from "./CompletePage";

function App() {
  const [view, setView] = useState<"home" | "ticket" | "complete">("home");

  if (view === "ticket") {
    return (
      <TicketPage
        onComplete={() => setView("complete")}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "complete") {
    return <CompletePage onBack={() => setView("home")} />;
  }

  return <MikagamiPage onReserve={() => setView("ticket")} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
