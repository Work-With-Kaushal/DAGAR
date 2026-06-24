function Header() {
  return (
    <div
      className="card shadow-lg mb-4"
      style={{
        background:
          "linear-gradient(135deg,#1e3a8a,#2563eb)",
        color: "white"
      }}
    >
      <div className="card-body">
        <h2>🛣️ DAGAR Dashboard</h2>
        <p className="mb-0">
          Smart Road Damage Monitoring & Reporting System
        </p>
      </div>
    </div>
  );
}

export default Header;