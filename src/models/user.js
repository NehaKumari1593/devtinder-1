const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:{type:String,
        unique:true,
        required:true,
        minLength:5
    },
    lastName:{type:String},
    email:{type:String,
       required:true,
       
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
        maxLength:30,
        required:true

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


const User = mongoose.model("User", userSchema);


module.exports=User;