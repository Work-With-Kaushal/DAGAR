import { useEffect, useState } from "react";
import API from "../api";

function AdminDashboard() {
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

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/reports/${id}`, {
        status,
      });

      fetchReports();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReport = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this report?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/reports/${id}`);

      fetchReports();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id="admin"
      className="card shadow-lg p-4 mt-5"
    >
      <h3>⚙️ Admin Dashboard</h3>

      <table className="table table-striped mt-3">

        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report) => (

            <tr key={report._id}>

              <td>
                {report.description}
              </td>

              <td>

                <select
                  className="form-select"
                  value={
                    report.status ||
                    "Reported"
                  }
                  onChange={(e) =>
                    updateStatus(
                      report._id,
                      e.target.value
                    )
                  }
                >

                  <option>
                    Reported
                  </option>

                  <option>
                    In Progress
                  </option>

                  <option>
                    Fixed
                  </option>

                </select>

              </td>

              <td>
                {report.latitude}
              </td>

              <td>
                {report.longitude}
              </td>

              <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteReport(report._id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminDashboard;