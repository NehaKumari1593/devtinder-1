const mongoose=require("mongoose")

const connectDB=async ()=>{

await mongoose.connect("mongodb+srv://nehachaudhary1593_db_user:DfUsQo7sPveCSkHj@cluster0.c7w3kad.mongodb.net/")
}

module.export()=connectDB