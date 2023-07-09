const express = require("express");
const router = express.Router();
const { registerClient } = require("../controllers/Accounts/RegisterClient");

router.post("/client", registerClient);

module.exports = router;
