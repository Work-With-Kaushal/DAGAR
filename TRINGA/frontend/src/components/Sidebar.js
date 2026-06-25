import { useState, useEffect } from "react";

function Sidebar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const links = [
        {
            href: "#dashboard",
            icon: "📊",
            text: "Dashboard",
        },
        {
            href: "#report",
            icon: "🚧",
            text: "Report",
        },
        {
            href: "#reports",
            icon: "📋",
            text: "Reports",
        },
        {
            href: "#map",
            icon: "🗺️",
            text: "Map",
        },
        {
            href: "#admin",
            icon: "⚙️",
            text: "Admin",
        },
    ];

    return (
        <div
            style={{
                width: isMobile ? "100%" : "250px",
                height: isMobile ? "auto" : "100vh",
                position: isMobile ? "relative" : "fixed",
                left: 0,
                top: 0,
                background: "linear-gradient(180deg,#0f172a,#1e3a8a)",
                padding: "20px",
                overflowY: "auto",
                zIndex: 1000,
                boxShadow: "0 8px 25px rgba(0,0,0,.25)",
            }}
        >
            <h2
                style={{
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: "5px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                }}
            >
                🛣️ DAGAR
            </h2>

            <p
                style={{
                    color: "#cbd5e1",
                    textAlign: "center",
                    fontSize: "13px",
                    marginBottom: "25px",
                }}
            >
                Smart Road Monitoring Portal
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile
                        ? "repeat(2,1fr)"
                        : "1fr",
                    gap: "14px",
                }}
            >
                {links.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        style={{
                            textDecoration: "none",
                            color: "#fff",
                            background: "rgba(255,255,255,.12)",
                            padding: "16px",
                            borderRadius: "18px",
                            textAlign: "center",
                            fontWeight: "600",
                            transition: "0.3s",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            boxShadow: "0 6px 15px rgba(0,0,0,.15)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#2563eb";
                            e.currentTarget.style.transform =
                                "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                                "rgba(255,255,255,.12)";
                            e.currentTarget.style.transform =
                                "translateY(0)";
                        }}
                    >
                        <div
                            style={{
                                fontSize: "26px",
                                marginBottom: "8px",
                            }}
                        >
                            {item.icon}
                        </div>

                        <div
                            style={{
                                fontSize: "15px",
                            }}
                        >
                            {item.text}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;