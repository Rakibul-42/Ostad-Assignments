const ProfileModel = require("../model/user/ProfileModel");
const UserModel = require("../model/user/UserModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");

const userOTPService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);
    let emailText = `Your Verification code Is ${code}`;
    let emailSubject = "Email Verification";
    await EmailSend(email, emailText, emailSubject);
    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );
    return { status: "Success", message: "OTP has been send" };
  } catch (err) {
    return { status: "Fail", message: err.message };
  }
};
const verifyOTPService = async (req) => {
   try{
    let email = req.params.email;
    let otp = req.params.otp;
    //user Count 
    let total = await UserModel.find({email:email , otp:otp}).count('Total')
    if(total === 1){
        //userID read 
       let  user_id = await UserModel.find({email:email , otp:otp}).select('_id');

       //User Token Create
       let token = EncodeToken(email , user_id[0]['_id'].toString());
      //otp code update to 0 
       await UserModel.updateOne({email:email} , {$set:{otp:"0"}})

       return { status: "Success", message: "Valid OTP" , token:token};
    }
    else{
      return { status: "Success", message: "Wrong OTP"};
    }
   }
   catch (err) {
    return { status: "Fail", message: err.message };
  }
};

const SaveProfileService = async (req) => {
  try{
    let user_id = req.headers.user_id 
  let reqBody = req.body ;
  reqBody.userID = user_id;

  await ProfileModel.updateOne({userID :user_id} , {$set:reqBody} , {upsert:true})
  return {status:'Success' , message:"Profile saved"}
  }catch (err) {
    return { status: "Fail", message: err.message };
  }
};

const ReadProfileService = async (req) => {
  try{
    let user_id = req.headers.user_id  
  let data =  await ProfileModel.find(user_id);
  return {status:'Success' ,data : data}

  } 
  catch (err) {
    return { status: "Fail", message: err.message };
  }
};

module.exports = {
  userOTPService,
  verifyOTPService,
  SaveProfileService,
  ReadProfileService,
};
