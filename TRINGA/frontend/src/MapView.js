import { useEffect, useState } from "react";
import API from "./api";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

function MapView() {
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

  const locationIcon = L.divIcon({
    html: `
      <div
        style="
          font-size:22px;
        "
      >
        📍
      </div>
    `,
    className: "",
    iconSize: [22, 22],
  });

  return (
    <div className="card shadow-lg p-4">

      <h2 className="mb-4">
        🗺️ Road Damage Map
      </h2>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {reports.map((report) => (

          <Marker
            key={report._id}
            position={[
              report.latitude,
              report.longitude,
            ]}
            icon={locationIcon}
          >
            <Popup>

              <strong>
                {report.description}
              </strong>

              <br />

              Status:
              {" "}
              {report.status}

              <br />

              Latitude:
              {" "}
              {report.latitude}

              <br />

              Longitude:
              {" "}
              {report.longitude}

            </Popup>
          </Marker>

        ))}

      </MapContainer>

    </div>
  );
}

export default MapView;