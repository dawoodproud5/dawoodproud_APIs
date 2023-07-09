const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  // const localDBUrl = "mongodb://localhost:27017/youtube";
  const atlasDBUrl =
    "mongodb+srv://dawoodproud5:thankyouAllah786@consultation.hjgpho6.mongodb.net/";

  try {
    const conn = await mongoose.connect(atlasDBUrl);
    console.log(`mongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("Connected error : ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
