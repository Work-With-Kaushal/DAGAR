function Sidebar() {
    const isMobile = window.innerWidth <= 768;

    return (
        <div
            className="text-white p-4"
            style={{
                width: isMobile ? "100%" : "250px",
                height: isMobile ? "auto" : "100vh",
                position: isMobile ? "relative" : "fixed",
                left: 0,
                top: 0,
                background:
                    "linear-gradient(180deg,#0f172a,#1e3a8a)",
                overflowY: "auto",
                zIndex: 1000
            }}
        >
            <h3 className="mb-1">🛣️ DAGAR</h3>

            <p
                style={{
                    fontSize: "12px",
                    opacity: 0.8
                }}
            >
                Road Monitoring Portal
            </p>

            <hr />

            <ul
                className="nav"
                style={{
                    flexDirection: isMobile ? "row" : "column",
                    flexWrap: "wrap",
                    gap: "10px"
                }}
            >
                <li className="nav-item">
                    <a
                        href="#admin"
                        className="nav-link text-white"
                    >
                        ⚙️ Admin
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#dashboard"
                        className="nav-link text-white"
                    >
                        📊 Dashboard
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#report"
                        className="nav-link text-white"
                    >
                        🚧 Report Road
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#reports"
                        className="nav-link text-white"
                    >
                        📋 Reports
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        href="#map"
                        className="nav-link text-white"
                    >
                        🗺️ Map View
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;