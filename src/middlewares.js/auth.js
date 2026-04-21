const jwt=require("jsonwebtoken")
const User=require("../models/user.js")

const userAuth=async (req,res,next)=>{

  const {token}=req.cookies
  const decodeObj=await jwt.verify(token,"dev@tinder")
  const {id}=decodeObj
    const user=await User.findById(id)
    if(!user)
    {
      throw new Error("no user found")
    }
    req.user=user
    next()
}
module.exports={userAuth}