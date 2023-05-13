const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../../models/RegisterAdmin");

const loginAdmin = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   //  **Checking if user already register with the same email or not
   const adminExist = await Admin.findOne({ email });

   //  **Sending response back to user including JSON_WEB_TOKEN
   if (adminExist && (await bcrypt.compare(password, adminExist.password))) {
      res.status(200).json({
         _id: adminExist.id,
         name: adminExist.name,
         email: adminExist.email,
         token: generateToken(
            adminExist._id,
            adminExist.name,
            adminExist.email
         ),
      });
   } else {
      res.status(400);
      throw new Error("Invalid Credientals");
   }
});

//  **Generating a Token Function
const generateToken = (id, name, email) => {
   return jwt.sign({ id, name, email }, "bcsfSecretJWTEncryption", {
      expiresIn: "30d",
   });
};

module.exports = {
   loginAdmin,
};
