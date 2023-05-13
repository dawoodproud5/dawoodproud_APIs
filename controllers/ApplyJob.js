const asyncHander = require("express-async-handler");
const CandidateApplyJob = require("../models/ApplyJob");

const candidateApplyJob = asyncHander(async (req, res) => {
   const candidateApplyJob = await CandidateApplyJob.create({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      coverLetter: req.body.coverLetter,
      cv: req.body.cv,
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4,
      answer5: req.body.answer5,
      answer6: req.body.answer6,
      answer7: req.body.answer7,
      answer8: req.body.answer8,
      answer9: req.body.answer9,
      answer10: req.body.answer10,
      answer11: req.body.answer11,
      answer12: req.body.answer12,
      answer13: req.body.answer13,
      answer14: req.body.answer14,
      answer15: req.body.answer15,
      answer16: req.body.answer16,
      answer17: req.body.answer17,
      answer18: req.body.answer18,
      answer19: req.body.answer19,
      answer20: req.body.answer20,
      answer21: req.body.answer21,
   });

   try {
      res.status(201).json(candidateApplyJob);
   } catch (error) {
      res.status(400);
      throw new Error(error);
   }
});

const getCandidateApplyJob = asyncHander(async (req, res) => {
   const candidates = await CandidateApplyJob.find({});

   try {
      res.status(200).json(candidates);
   } catch (error) {
      res.status(400);
      throw new Error(error);
   }
});

const getSingleCandidateDetail = asyncHander(async (req, res) => {
   const candidate = await CandidateApplyJob.findById(req.params.id);
   
   try {
      res.status(200).json(candidate);
   } catch (error) {
      res.status(400)
      throw new Error(error);
   }
})

const deleteCandidate = asyncHander(async (req, res) => {
   const Candidate = await CandidateApplyJob.findByIdAndDelete(req.params.id);

   if(!Candidate) {
      res.status(404);
      throw new Error("Candidate not found");
   }

   try {
      res.status(200).json({message: "Candidate Deleted", name: Candidate.fullName});
   } catch (error) {
      res.status(400);
      throw new Error(error); 
   }

})

module.exports = { candidateApplyJob, getCandidateApplyJob, getSingleCandidateDetail, deleteCandidate };
