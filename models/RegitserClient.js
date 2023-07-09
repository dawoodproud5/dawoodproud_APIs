const mongoose = require("mongoose");

const registerClient = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RegisteredClients", registerClient);
