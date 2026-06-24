import { useEffect, useState } from "react";
import API from "./api";

function ReportList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await API.get("/reports");
      setReports(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="reports">

      <h2 className="mb-4">
        📋 Submitted Reports
      </h2>

      {reports.length === 0 ? (
        <div className="alert alert-info">
          No reports submitted yet.
        </div>
      ) : (
        reports.map((report) => (
          <div
            key={report._id}
            className="card shadow-lg mb-4"
          >
            <div className="card-body">

              <img
                src={`http://localhost:5000/uploads/${report.image}`}
                alt="Road Damage"
                className="img-fluid rounded mb-3"
              />

              <p>
                <strong>Description:</strong>
                <br />
                {report.description}
              </p>

              <p>
                <strong>Latitude:</strong>{" "}
                {report.latitude}
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                {report.longitude}
              </p>

              <div className="mb-2">

                <strong>Status:</strong>

                <span
                  className={
                    report.status === "Fixed"
                      ? "badge bg-success ms-2"
                      : report.status === "In Progress"
                      ? "badge bg-warning text-dark ms-2"
                      : "badge bg-danger ms-2"
                  }
                >
                  {report.status || "Reported"}
                </span>

              </div>

            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default ReportList;