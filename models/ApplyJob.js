const mongoose = require("mongoose");

const ApplyJob = mongoose.Schema(
   {
      fullName: {
         type: String,
         require: [true, "Please provide a full name"],
      },

      email: {
         type: String,
         require: [true, "Please provide a email"],
      },

      phone: {
         type: String,
         require: [true, "Please provide a phone number"],
      },

      coverLetter: {
         type: String,
         require: [true, "Please provide a cover letter"],
      },

      cv: {
         type: String,
         require: [true, "Please provide a CV"],
      },

      answer1: { type: String },
      answer2: { type: String },
      answer3: { type: String },
      answer4: { type: String },
      answer5: { type: String },
      answer6: { type: String },
      answer7: { type: String },
      answer8: { type: String },
      answer9: { type: String },
      answer10: { type: String },
      answer11: { type: String },
      answer12: { type: String },
      answer13: { type: String },
      answer14: { type: String },
      answer15: { type: String },
      answer16: { type: String },
      answer17: { type: String },
      answer18: { type: String },
      answer19: { type: String },
      answer20: { type: String },
      answer21: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model("CandidateApplyJob", ApplyJob);
