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
  const itemId = req.params.id;
  try {
    const requireditem = await item.findById(itemId);
    if (!requireditem) {
      res.json({ message: "item not found" });
    } else {
      res.status(200).json({
        message: "item fetched successfully",
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

//update stock by id

const updateStock = async (req, res) => {
  try {
    const data = req.body;
    const itemId = req.params.id;

    const updatedItem = await item.findByIdAndUpdate(itemId, data, {
      new: true,
    });

    if (!updatedItem) {
      return res.json({
        success: false,
        data: "item not found for this id.",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedItem,
    });
  } catch (error) {
    console.log("Api failed", error);
    res.status(404).json({
      success: false,
      data: "some thing went wrong .",
    });
  }
};

module.exports = { getAllItems, addItem, getItembyName, updateStock };
