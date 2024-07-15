import mongoose from "mongoose";



const CONNECT_DB  = async ()=>{

     try {
         
        await  mongoose.connect(process.env.MONGO_URL);
         console.log("CONNECTED TO MONGO DB via MONGOOOOOOSE");
     } catch (error) {
        console.log("DB - MONGOOOOOOSE error : "+ error.message);

        
     }
}


export default CONNECT_DB;