const asyncHandler = require("express-async-handler");
const RegisteredClients = require("../../models/RegitserClient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerClientWithGoogle = asyncHandler(async (req, res) => {
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

const registerClientWithEmail = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await RegisteredClients.findOne({ email: email });

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  if (userExists) {
    res.status(200).json({
      _id: userExists.id,
      email: userExists.email,
      token: generateTokenForEmail(userExists._id, userExists.email),
    });
  } else {
    const newClient = await RegisteredClients.create({
      email: email,
      password: encryptedPassword,
    });

    if (newClient) {
      res.status(201).json({
        _id: newClient.id,
        email: newClient.email,
        token: generateTokenForEmail(newClient._id, newClient.email),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }
});

//  **Generating a Token Function
const generateToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const generateTokenForEmail = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerClientWithGoogle, registerClientWithEmail };
