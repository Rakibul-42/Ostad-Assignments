const WishModel = require("../model/WishModel");

const WishListService = async (req) => {
  try {
    
    let data = await WishModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Fail", message: err.message };
  }
};
const SaveWishListService = async (req) => {
   
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    let data = await WishModel.updateOne(
      reqBody,
      { $set: reqBody },
      { upsert: true }
    );

    return { status: "Success", message: "Wishlist saved"  , data:data};
  } catch (err) {
    return { status: "Fail", message: err.message };
  }
};
const RemoveWishListService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userId = user_id;
    
        let data = await WishModel.deleteOne(reqBody);
    
        return { status: "Success", message: "Item removed" };
      } catch (err) {
        return { status: "Fail", message: err.message };
      }
};

module.exports = {
  WishListService,
 SaveWishListService,
  RemoveWishListService,
};
