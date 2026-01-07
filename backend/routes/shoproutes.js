const express = require("express");
const router = express.Router();
const {
  getAllItems,
  addItem,
  getItembyName,
  updateStock,
} = require("../contoller/shopcontoller");

//get all items
router.get("/", getAllItems);
//get item by name
router.get("/:name", getItembyName);
//add item
router.post("/add", addItem);
//update stock by id
router.put("/update/:id", updateStock);
//update price by id

//delete item

module.exports = router;
