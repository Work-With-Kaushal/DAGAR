require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const reportRoutes = require("./routes/reportRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static folder
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/reports", reportRoutes);

// DB + server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });