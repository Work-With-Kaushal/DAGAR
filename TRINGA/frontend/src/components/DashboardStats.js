import { useEffect, useState } from "react";
import API from "../api";

function DashboardStats() {
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

  const totalReports = reports.length;

  const fixedReports = reports.filter(
    (r) => r.status === "Fixed"
  ).length;

  const pendingReports =
    totalReports - fixedReports;

  return (
    <div className="row mb-5">

      <div className="col-md-4">
        <div className="stats-card">

          <div className="stats-icon blue">
            📋
          </div>

          <div>
            <h6>Total Reports</h6>

            <h2>
              {totalReports}
            </h2>

            <small>
              All submitted reports
            </small>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="stats-card">

          <div className="stats-icon orange">
            ⏳
          </div>

          <div>
            <h6>Pending</h6>

            <h2>
              {pendingReports}
            </h2>

            <small>
              Awaiting resolution
            </small>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="stats-card">

          <div className="stats-icon green">
            ✅
          </div>

          <div>
            <h6>Fixed</h6>

            <h2>
              {fixedReports}
            </h2>

            <small>
              Successfully repaired
            </small>
          </div>

        </div>
      </div>

    </div>
  );
}

export default DashboardStats;