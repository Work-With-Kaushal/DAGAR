function Sidebar() {
    return (
        <div
            className="text-white p-4"
            style={{
                width: "100%",
                background:
                    "linear-gradient(180deg,#0f172a,#1e3a8a)",
            }}
        >
            <h2
                style={{
                    fontWeight: "700",
                    marginBottom: "5px",
                }}
            >
                🛣️ DAGAR
            </h2>

            <p
                style={{
                    fontSize: "14px",
                    opacity: 0.8,
                    marginBottom: "20px",
                }}
            >
                Road Monitoring Portal
            </p>

            <hr
                style={{
                    borderColor: "rgba(255,255,255,0.2)",
                }}
            />

            <ul
                className="nav"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    justifyContent: "center",
                    padding: "10px 0",
                }}
            >
                <li className="nav-item">
                    <a
                        href="#admin"
                        className="nav-link text-white"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px 18px",
                        }}
                    >
                        ⚙️ Admin
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#dashboard"
                        className="nav-link text-white"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px 18px",
                        }}
                    >
                        📊 Dashboard
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#report"
                        className="nav-link text-white"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px 18px",
                        }}
                    >
                        🚧 Report
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#reports"
                        className="nav-link text-white"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px 18px",
                        }}
                    >
                        📋 Reports
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#map"
                        className="nav-link text-white"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px 18px",
                        }}
                    >
                        🗺️ Map
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;