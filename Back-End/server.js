import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import ProductRoute from "../Back-End/Routes/ProductRoute.js"
import userRoute from "../Back-End/Routes/userRoute.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use('/uploads', express.static('uploads'));


app.use(cors());
app.use('/product', ProductRoute);
app.use('/user', userRoute);


app.listen(process.env.PORT, () => {
    console.log("connected to db & running on port", process.env.PORT);
  });