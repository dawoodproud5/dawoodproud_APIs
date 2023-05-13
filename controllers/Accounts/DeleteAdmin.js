const asyncHandler = require("express-async-handler");
const Admin = require("../../models/RegisterAdmin");

const deleteAdmin = asyncHandler(async (req, res) => {
    const admin = await Admin.findByIdAndDelete(req.params.id);

    if(!admin) {
      res.status(404);
      throw new Error("Admin not found");
    }

    try {
        res.status(200).json({message: "Admin Deleted", name: admin.name});
    } catch (error) {
        res.status(400);
        throw new Error(error); 
    }
})

module.exports = {
    deleteAdmin
}