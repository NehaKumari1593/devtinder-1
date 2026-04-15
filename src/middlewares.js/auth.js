const adminAuth=(req,res,next)=>{

  const token="101"
  const isAuthUser=token==="101"
  if(!isAuthUser)
  {
    res.status(401).send("token is incorrect")
  }
  else{
    next()
  }
}
const userAuth=(req,res,next)=>{

  const token="101"
  const isAuthUser=token==="101"
  if(!isAuthUser)
  {
    res.status(401).send("token is incorrect")
  }
  else{
    next()
  }
}
module.exports={adminAuth,userAuth}