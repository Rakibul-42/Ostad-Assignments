
const CartModel = require("../model/user/CartModel");

exports.CartService = async (req) => {
  try {
    
    let data = await CartModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Fail", message: err.message };
  }
};
