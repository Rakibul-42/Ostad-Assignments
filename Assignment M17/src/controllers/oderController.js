const OrderModel = require("../model/oderModel");

exports.createOder = async (req, res) => {
  try {
    const result = await OrderModel.create(req.body);
    res.status(200).json({ message: "Order placed successfully!", data: result });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};
exports.OderListUpdate = async (req, res) => {
  const userID = req.params.userId;
  const updateFields = req.body;
  try {
    const existingOrder = await OrderModel.findOne({ user: userID });

    if (!existingOrder) {
      return res.status(404).json({ message: "Order not found for the user." });
    }

    const result = await OrderModel.updateOne({ user: userID }, updateFields);

    if (result.nModified > 0) {
      res.status(200).json({ message: "Order details remain unchanged." });
    } else {
      res
        .status(200)
        .json({ message: "Order update successful", data: result });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};

exports.cancelOderByOrderId = async (req, res) => {
  const ID = req.params.orderID;
  try {
    const result = await OrderModel.deleteOne({ _id: ID });
    res.status(200).json({ message: "Order canceled", data: result });
  } catch (err) {
    res.status(500).json({ message: "Encountered an issue while processing your request.", error: err.message });
  }
};
