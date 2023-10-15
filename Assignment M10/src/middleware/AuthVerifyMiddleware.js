const jwt = require("jsonwebtoken");

module.exports= async(req, res, next)=>{
    try {
        let token = req.headers["token-key"];
        const decoded = await jwt.verify(token, "Rakibul");

        let email = decoded["data"];
        req.headers.email = email;

        next()
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: error
        });
    }
};