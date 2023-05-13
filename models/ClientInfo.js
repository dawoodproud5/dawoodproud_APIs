const mongoose = require("mongoose");

const ClientInfo = mongoose.Schema(
   {
      name: {
         type: String,
         require: [true, "Please provide a Name"],
      },

      YoutubeName: {
         type: String,
         require: [true, "Please provide a Youtube"],
      },

      URL: {
         type: String,
         require: [true, "Please provide a URL"],
      },

      subs: {
         type: String,
         require: [true, "Please provide a subsribers"],
      },

      revenue: {
         type: String,
         require: [true, "Please provide a revenue"],
      },

      email: {
         type: String,
         require: [true, "Please provide a email"],
      },

      phone: {
         type: String,
         require: [true, "Please provide a phone number"],
      },

      services: {
         type: Array,
         require: [true, "Please provide a service"],
      },

      contactvia: {
         type: Array,
         require: [true, "Please provide a contact via"],
      },

      hearaboutus: {
         type: String,
         require: [
            true,
            "Please provide a valid source from where you hear about us",
         ],
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("ClientInfo", ClientInfo);
