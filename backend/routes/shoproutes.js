const express = require("express");
const router = express.Router();
const { getAllItems, addItem } = require("../contoller/shopcontoller");

//get all items
router.get("/", getAllItems);
//get item by id

//add item
router.post("/add", addItem);
//update stock by id

//update price by id

//delete item

module.exports = router;
