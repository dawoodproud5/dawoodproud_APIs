const express = require("express");
const router = express.Router();
const {
  registerClientWithEmail,
  registerClientWithGoogle,
  getEmail,
} = require("../controllers/Accounts/RegisterClient");

router.post("/with/google", registerClientWithGoogle);
router.post("/with/email", registerClientWithEmail);
router.get("/get/email", getEmail);

module.exports = router;
