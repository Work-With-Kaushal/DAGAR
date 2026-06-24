require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const reportRoutes = require("./routes/reportRoutes");

const app = express();

// =====================
// Debug Logs
// =====================
console.log("🚀 Starting Server...");
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Static Folder
// =====================
app.use("/uploads", express.static("uploads"));

// =====================
// Test Route
// =====================
app.get("/", (req, res) => {
  res.send("✅ DAGAR Backend is Running!");
});

// =====================
// Routes
// =====================
app.use("/api/reports", reportRoutes);

// =====================
// MongoDB Connection
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
  });

// =====================
// Unhandled Errors
// =====================
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:");
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:");
  console.error(err);
});