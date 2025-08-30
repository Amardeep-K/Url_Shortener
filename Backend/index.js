import express from "express";
import { nanoid } from "nanoid";
import  dotenv from "dotenv";

import connectDB from "./config/mongo.config.js"
import cors from "cors";

import route from "./Routes/shortUrl.route.js";
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
dotenv.config("./.env");

// app.get('/',(req,res)=>{
//     res.send(nanoid(10))
  
// })

app.use("/",route )
// db.urlSchema.deleteMany({ shortUrl: null });

// app.get("/:id",route)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  connectDB();
    console.log(`Listening to http://localhost:${PORT}`);
})