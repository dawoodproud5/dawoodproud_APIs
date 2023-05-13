const express = require("express");
const { registerNewAdmin } = require("../controllers/Accounts/Register");
const { loginAdmin } = require("../controllers/Accounts/Login");
const { deleteAdmin } = require("../controllers/Accounts/DeleteAdmin");
const { protect } = require("../middleware/authMiddleware");
const { updateAdmin } = require("../controllers/Accounts/UpdateAdmin");
const router = express.Router();

router.post("/register", registerNewAdmin);
router.post("/login", loginAdmin);
router.delete("/delete/:id", deleteAdmin);
router.put("/update/:id", updateAdmin);

module.exports = router;
