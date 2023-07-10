const asyncHandler = require("express-async-handler");
const RegisteredClients = require("../../models/RegitserClient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerClient = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const userExists = await RegisteredClients.findOne({ email: email });

  // **Generate Random Passwrod
  const password = "dawood" + email + "@gmail.com" + "raheel@gmail.com";

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  if (userExists) {
    res.status(200).json({
      _id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      token: generateToken(userExists._id, userExists.name, userExists.email),
    });
  } else {
    const newClient = await RegisteredClients.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    if (newClient) {
      res.status(201).json({
        _id: newClient.id,
        name: newClient.name,
        email: newClient.email,
        token: generateToken(newClient._id, newClient.name, newClient.email),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }
});

//  **Generating a Token Function
const generateToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, "bcsfSecretJWTEncryption", {
    expiresIn: "30d",
  });
};

module.exports = { registerClient };
