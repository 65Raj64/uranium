const jwt=require("jsonwebtoken")

const validateToken = function(req, req, next) {
    let token=req.headers["X-Auth-token"];
    if(!token) token=req.headers["x-auth-token"];

    if(!token) return res.send({status:false, msg:"token must be present"});

    console.log(token);

    let decodedToken = jwt.verify(token,"function-thorium");

    if(!decodedToken){
        return res.send({status:false, msg:"token is invalid"})
    }

    next()
}


//const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
  //  next()
//}


module.export.validateToken=validateToken
//module.export.authorise=authorise