const validator=require("validator")

const validateUserData=(data)=>{
const {firstName,lastName,email,password}=data
if(!firstName || !lastName)
{
    throw new Error("plz enter full name")
}
if(firstName.length<4 || firstName.length>50)
{
    throw new Error("invalid name")
}
if(!validator.isEmail(email))
{
    throw new Error("invalid email")
}
if(!validator.isStrongPassword(password))
{
    throw new Error("plz enter strong passwprd")
}
}
module.exports={validateUserData}