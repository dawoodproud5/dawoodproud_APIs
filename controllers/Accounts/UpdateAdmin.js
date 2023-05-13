const asyncHandler = require("express-async-handler");
const Admin = require("../../models/RegisterAdmin");
const bcrypt = require("bcrypt");

const updateAdmin = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      res.status(400);
      throw new Error("Admin not found");
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);

    const adminObj = {
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
    }
  
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, adminObj, {
      new: true,
    });
  
    res.status(200).json(updatedAdmin);
});

module.exports = { updateAdmin };
