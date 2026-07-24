type CompletePageProps = {
  onBack?: () => void;
};

export default function CompletePage({ onBack }: CompletePageProps) {
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
          maxWidth: "520px",
          padding: "36px",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: "12px",
            color: "#48cae4",
            letterSpacing: "0.3em",
          }}
        >
          Reservation Complete
        </p>
        <h1 style={{ margin: "0 0 16px", fontSize: "28px" }}>
          予約完了しました
        </h1>
        <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
          ご予約ありがとうございます。確認メールをお送りしましたのでご確認ください。
        </p>
        <button
          type="button"
          onClick={onBack}
          style={{
            marginTop: "24px",
            padding: "12px 18px",
            borderRadius: "8px",
            border: "1px solid #48cae4",
            background: "#48cae4",
            color: "#04101f",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
}
