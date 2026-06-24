function Sidebar() {
    return (
        <div
            className="text-white p-4"
            style={{
                width: "250px",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                background:
                    "linear-gradient(180deg,#0f172a,#1e3a8a)",
                overflowY: "auto"
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

            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a
                        href="#admin"
                        className="nav-link text-white"
                    >
                        ⚙️ Admin Dashboard
                    </a>
                </li>

                <li className="nav-item mb-2">
                    <a
                        href="#dashboard"
                        className="nav-link text-white"
                    >
                        📊 Dashboard
                    </a>
                </li>

                <li className="nav-item mb-2">
                    <a
                        href="#report"
                        className="nav-link text-white"
                    >
                        🚧 Report Road
                    </a>
                </li>

                <li className="nav-item mb-2">
                    <a
                        href="#reports"
                        className="nav-link text-white"
                    >
                        📋 Reports
                    </a>
                </li>

                <li className="nav-item mb-2">
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