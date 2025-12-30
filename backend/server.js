const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const shoproutes = require("./routes/shoproutes");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
//mongodb connection
connectdb();
//json
app.use(express.json());

//routes
app.use("/shop/api", shoproutes);

//server start
app.listen(PORT, () => {
  console.log(`server is started on ${PORT}`);
});
