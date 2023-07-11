const express = require("express");
const router = express.Router();
const {
  registerClientWithEmail,
  registerClientWithGoogle,
} = require("../controllers/Accounts/RegisterClient");

router.post("/with/google", registerClientWithGoogle);
router.post("/with/email", registerClientWithEmail);

module.exports = router;
