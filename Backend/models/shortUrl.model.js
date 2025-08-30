import mongoose from "mongoose";
const urlShortenerSchema =new mongoose.Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
        
    }
    ,
    count:{
        type:Number,
        required:true,
        default:0
    }
});
export default mongoose.model("urlSchema",urlShortenerSchema);