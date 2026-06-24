import { useState } from "react";

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            username === "admin" &&
            password === "admin123"
        ) {
            localStorage.setItem(
                "adminLoggedIn",
                "true"
            );

            onLogin(true);
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="card shadow-lg p-4 mt-5">
            <h3>🔐 Admin Login</h3>

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>

                <button
                    className="btn btn-dark"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;