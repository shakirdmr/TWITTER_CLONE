import express from "express"
import authRoutes  from "./routes/auth.route.js";
import CONNECT_DB from "./db/connectToMongoose.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT  = process.env.PORT ||  8000;


app.use("/api/auth", authRoutes);


app.listen(PORT,()=>{

    console.log("SERVER RUNNING ON PORT "+PORT);

    CONNECT_DB();
});