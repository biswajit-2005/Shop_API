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

//get items by Name

const getItembyName = async (req, res) => {
  const Name = req.params.name;
  try {
    const requireditem = await item.findOne({ name: name });
    if (!requireditem) {
      res.json({ message: "item not found" });
    } else {
      res.status(200).json({
        messege: "item fetched successfully",
        data: requireditem,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "cannot fetch item .",
      error: error.message,
    });
  }
};
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

module.exports = { getAllItems, addItem, getItembyName };
