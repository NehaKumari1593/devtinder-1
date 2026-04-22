const mongoose=require("mongoose")
const validator=require("validator")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    firstName:{type:String,
        unique:true,
        required:true,
        minLength:5
    },
    lastName:{type:String},
    email:{type:String,
       required:true,
       validate(value)
       {
        if(!validator.isEmail(value))
        {
            throw new Error("emailis incorrect")
        }

       },
       
       unique:true,
        lowercase:true,
        trim:true
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value))
            {
                throw new Error()
            }
        }
        
    },
    password:{type:String,
        minLength:8,
        
        validate(value)
       {
        if(!validator.isStrongPassword(value))
        {
            throw new Error("password is not storng")
        }

       },
        required:true,
        

    },
    age:{type:Number,
        validate(value)
        {
            if(value<18)
            {
                throw new Error()
            }
        }

    },
    skill:{
        type:[String]
    },
    photoUrl:{
        type:String,
        default:"njcnjndjnvjnvjfnjvnjfvnjvjf"
    }

},{timestamps:true})

userSchema.methods.getJWT=async function ()
{
    const user=this
 const token =await jwt.sign({id:user._id},"dev@tinder") //,{expiresIn:'20sec'}
 return token
}
userSchema.methods.bcrypt=async function(userEnteredPass)
{
    const user=this
    const isMatch=await bcrypt.compare(userEnteresPass,user.password);
    return isMatch
}
const User = mongoose.model("User", userSchema);


module.exports=User;