import mongoose from "mongoose";

async function connectDB () {
   if (mongoose.connections[0].readyState) return;  
   try {
      await mongoose.connect(process.env.MONGO_URI)
   } catch (err) {
      console.log(err);
      return;
   }
   console.log("connected to DB");   
}

export default connectDB;