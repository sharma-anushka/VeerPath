const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Contract (1 year)", "Remote", "Freelance"],
    required: true
  },
  postedOn: {
    type: Date,
    required: true
  },
  applyBy: {
    type: Date,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Job", jobSchema);
