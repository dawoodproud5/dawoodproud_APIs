const express = require("express");
const router = require("express").Router();
const {
   candidateApplyJob,
   getCandidateApplyJob,
   getSingleCandidateDetail,
   deleteCandidate,
} = require("../controllers/ApplyJob");
const { protect } = require("../middleware/authMiddleware");

router.post("/apply", candidateApplyJob);
router.get("/apply", protect, getCandidateApplyJob);
router.get("/single/detail/:id", protect, getSingleCandidateDetail);
router.delete("/delete/:id", protect, deleteCandidate)

module.exports = router;
