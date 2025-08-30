import mongoose from "mongoose";
 const connectDB= async ()=>{

        await mongoose.connect(process.env.MONGO_URI,
           
        ).then(()=>console.log("Database connected"))
  .catch(err => console.error(err))
  
}
export default connectDB;