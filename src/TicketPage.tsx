type TicketPageProps = {
  onComplete?: () => void;
  onBack?: () => void;
};

export default function TicketPage({ onComplete, onBack }: TicketPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        background: "linear-gradient(135deg, #07111f 0%, #0b132b 100%)",
        color: "#f7f9fc",
        fontFamily: '"Noto Sans JP", sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          padding: "36px",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: "12px",
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: "#48cae4",
            textTransform: "uppercase",
          }}
        >
          Ticket Reservation
        </p>
        <h1 style={{ margin: "0 0 16px", fontSize: "28px" }}>チケット予約</h1>
        <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
          VIPチケットまたは一般入場チケットをご希望の方は、以下のボタンからお進みください。
        </p>

        <div style={{ display: "grid", gap: "12px", marginTop: "24px" }}>
          <button
            type="button"
            onClick={onComplete}
            style={{
              padding: "14px 18px",
              borderRadius: "8px",
              border: "1px solid #48cae4",
              background: "#48cae4",
              color: "#04101f",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            VIPチケットを予約する
          </button>
          <button
            type="button"
            onClick={onComplete}
            style={{
              padding: "14px 18px",
              borderRadius: "8px",
              border: "1px solid #f3c68f",
              background: "transparent",
              color: "#f3c68f",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            一般入場チケットを予約する
          </button>
          <button
            type="button"
            onClick={onBack}
            style={{
              marginTop: "8px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );
}
