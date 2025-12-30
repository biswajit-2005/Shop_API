const item = require("../models/items");

//get all items
const getAllItems = async (req, res) => {
  try {
    const items = await item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: "unable to fetch items", err });
  }
};

//get items by id

//add item
const addItem = async (req, res) => {
  try {
    const newItem = req.body;
    const addeditem = await item.create(newItem);
    res.status(201).json({
      message: "item added successfully",
      data: addeditem,
    });
  } catch (error) {
    res.status(400).json({
      message: "unable to add item",
      error: error.message,
    });
  }
};

module.exports = { getAllItems, addItem };
