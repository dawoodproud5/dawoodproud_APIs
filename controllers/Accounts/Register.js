const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../../models/RegisterAdmin");

const registerNewAdmin = asyncHandler(async (req, res) => {
   const { name, email, password, superAdmin } = req.body;

   if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
   }

   //  **Checking if user already register with the same email or not
   const adminExists = await Admin.findOne({ email });

   if (adminExists) {
      res.status(400);
      throw new Error("User alredy register with this Email address");
   }

   //  **Encrypting password
   const salt = await bcrypt.genSalt(10);
   const encryptedPassword = await bcrypt.hash(password, salt);

   //  **Creating new user
   const newAdmin = await Admin.create({
      name: name,
      email: email,
      password: encryptedPassword,
      superAdmin: superAdmin,
   });

   //  **Sending response back to user including JSON_WEB_TOKEN
   if (newAdmin) {
      res.status(201).json({
         _id: newAdmin.id,
         name: newAdmin.name,
         email: newAdmin.email,
         token: generateToken(
            newAdmin._id,
            newAdmin.registerAs,
            newAdmin.email,
            newAdmin.superAdmin
         ),
      });
   } else {
      res.status(400);
      throw new Error("Invalid Admin Data");
   }
});

//  **Generating a Token Function
const generateToken = (id, name, email, superAdmin) => {
   return jwt.sign({ id, name, email, superAdmin }, "bcsfSecretJWTEncryption", {
      expiresIn: "30d",
   });
};

module.exports = {
   registerNewAdmin,
};
