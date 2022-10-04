// Middleware gets executed after the server receives the request and before the controller actions send the response
//next() function calls the next middleware function if there is oneor directly sends to the route folder

// middleware for authentication using JWT

const jwt=require("jsonwebtoken"); //npm package that creates unique token for user
const jwtDecode=require("jwt-decode");  //npm package that decode unique token of user
const User=require("../models/User"); //User schema from database

module.exports= async(req,res,next)=>{ 

  //verify token

  try{const token=req.body.token;
   
    const {_id}=jwtDecode(token);
    
    const tokenUser=await User.findById(_id); // searching for user in the database

if(!token)
return res.send({"msg":"Access Denied"});

    const verified=jwt.verify(token,process.env.JWT_TOKEN_SECRET);  
    //process.env.JWT_TOKEN_SECRET is a secret key used to create the token

   const isVerified=tokenUser.isVerified; //checking the isVerified flag in the database

    if(verified._id == tokenUser._id) //matching the id of user in DB and id in token
    {
    if(!(await isVerified === true))
     return res.send({"msg":"You are not verified"});

    req.user=verified;   // a session is established
      next();
    }
}

catch(err){res.send({"msg":"Invalid token"});}

}