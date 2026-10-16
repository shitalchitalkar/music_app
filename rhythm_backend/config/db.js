const mongoose= require("mongoose");

//db connection

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected succesfully...");
    }
    catch(error){

        console.error("mongodb connection failed",error.message);
        process.exit(1);
    }
};
module.exports= connectDB;