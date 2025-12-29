const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT;

app.use("shop/api", shoproutes);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`server is started on ${PORT}`);
});
