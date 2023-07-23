const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

connectDB();
const app = express();

const allowedOrigins = ["http://server.dawoodproud.com"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/Accounts"));
app.use("/api/candidate", require("./routes/ApplyJob"));
app.use("/api/client", require("./routes/Contact"));
app.use("/api/register", require("./routes/RegisteredClient"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server started at ${port}`));
