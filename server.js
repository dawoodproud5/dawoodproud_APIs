const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

connectDB();
const app = express();

app.use(
  cors({
    origin: process.env.REQUEST_ORIGIN_PRODUCTION,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/Accounts"));
app.use("/api/candidate", require("./routes/ApplyJob"));
app.use("/api/client", require("./routes/Contact"));
app.use("/api/register", require("./routes/RegisteredClient"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server started at ${port}`));
