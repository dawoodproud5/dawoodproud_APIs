const asyncHandler = require("express-async-handler");
const ClientInfo = require("../models/ClientInfo");
const CandidateApplyJob = require("../models/ApplyJob");
const RegisteredClients = require("../models/RegitserClient");

const getCardsLength = asyncHandler(async (req, res) => {
  try {
    const clientInfoCount = await ClientInfo.countDocuments({});
    const candidateApplyJobCount = await CandidateApplyJob.countDocuments({});
    const registeredClientsCount = await RegisteredClients.countDocuments({});

    const length = {
      clientInfoCount,
      candidateApplyJobCount,
      registeredClientsCount,
    };

    res.status(200).json({ length: length });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data." });
  }
});

module.exports = getCardsLength;
