const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb connected succesfully.");
  } catch (err) {
    console.log("Mongodb connection failed.", err);
  }
};

module.exports = connectdb;
