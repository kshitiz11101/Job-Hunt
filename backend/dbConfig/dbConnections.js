import mongoose from "mongoose";
const dbConnections=async()=>{
    try {
        const dbConnection=await mongoose.connect(process.env.MONGO);
        console.log('DB Connected');
    } catch (error) {
        console.log("Db error",error);
    }
}
export default dbConnections;