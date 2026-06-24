const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "Reported"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);