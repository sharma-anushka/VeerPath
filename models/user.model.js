const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    sex: {
      type: String,
      required: true,
      enum: ['male', 'female', 'others'],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    aadhar_number: {
      type: String,
      required: true,
      unique: true,
      minlength: 12,
      maxlength: 12,
    },
    password: {
      type: String,
      required: true,
    },
    education: {
      type: String,
    },
    skills: {
      type: [String], // Array of strings
    },
    interests: {
      type: [String],
    },
    location: {
      type: String,
    },
    disability: {
      type: String,
      enum: ['none', 'visual_impairment', 'hearing_impairment', 'physical_disability', 'intellectual_disability', 'mental_health_condition', 'multiple_disabilities', 'autism_spectrum_disorder', 'cerebral_palsy', 'down_syndrome', 'dyslexia', 'dysgraphia', 'dyscalculia'],
      default: 'none',
    },
    experience: {
      type: Number,
    },
    marital_status: {
      type: String,
      enum: ['single', 'married', 'divorced', 'widowed', 'separated','engaged', 'in_a_relationship', 'other'],
    },
    children: {
      type: Number,
      min: 0,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);
module.exports = User;
