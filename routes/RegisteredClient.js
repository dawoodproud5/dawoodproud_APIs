const express = require("express");
const router = express.Router();
const {
  registerClientWithEmail,
  registerClientWithGoogle,
  getEmail,
  deleteEmail,
} = require("../controllers/Accounts/RegisterClient");

router.post("/with/google", registerClientWithGoogle);
router.post("/with/email", registerClientWithEmail);
router.get("/get/email", getEmail);
router.delete("/delete/:id", deleteEmail);

module.exports = router;
