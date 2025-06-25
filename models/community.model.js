const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId,ref:'User', required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
