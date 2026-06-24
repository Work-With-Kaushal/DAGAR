import { useState } from "react";
import API from "./api";
import AdminLogin from "./components/AdminLogin";
import Sidebar from "./components/Sidebar";
import DashboardStats from "./components/DashboardStats";
import Analytics from "./components/Analytics";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import "./App.css";
import ReportList from "./ReportList";
import MapView from "./MapView";

function App() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [adminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const formData = new FormData();

        formData.append("image", image);
        formData.append("description", description);
        formData.append("latitude", position.coords.latitude);
        formData.append("longitude", position.coords.longitude);

        try {
          await API.post("/reports", formData);

          alert("Report Submitted Successfully!");

          setDescription("");
          setImage(null);

          window.location.reload();
        } catch (error) {
          console.log("FULL ERROR:", error);

          if (error.response) {
            console.log("SERVER RESPONSE:", error.response.data);
            alert(
              "Submission Failed: " +
              JSON.stringify(error.response.data)
            );
          } else {
            alert("Submission Failed");
          }
        }
      },
      (error) => {
        console.error(error);
        alert("Location Access Denied");
      }
    );
  };

  return (
    <>
      <Sidebar />

      <div className="main-content">

        {/* Dashboard */}
        <div id="dashboard">
          <div
            className="card shadow-lg mb-5"
            style={{ borderRadius: "20px" }}
          >
            <div className="card-body text-center p-5">
              <h1 className="display-3">𝐃𝐀𝐆𝐀𝐑</h1>

              <p className="lead">
                Smart Road Damage Reporting & Monitoring
              </p>

              <hr />

              <p>
                Help improve India's road infrastructure by
                reporting damaged roads with images and GPS
                location.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <DashboardStats />

        {/* Report Form */}
        <div id="report" className="card p-4 mb-5">
          <h3 className="mb-3">
            🚧 Report Road Damage
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files[0])
                }
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Describe the road damage..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit Report
            </button>
          </form>
        </div>

        {/* Reports */}
        <div id="reports">
          <ReportList />
        </div>

        <hr className="my-5" />

        {/* Map */}
        <div id="map">
          <MapView />
        </div>

        <hr className="my-5" />

        {/* Analytics */}
        <Analytics />

        <hr className="my-5" />

        {/* Admin */}
        <div id="admin">
          {adminLoggedIn ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>⚙️ Admin</h3>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    localStorage.removeItem(
                      "adminLoggedIn"
                    );
                    setAdminLoggedIn(false);
                  }}
                >
                  Logout
                </button>
              </div>

              <AdminDashboard />
            </>
          ) : (
            <AdminLogin
              onLogin={setAdminLoggedIn}
            />
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;