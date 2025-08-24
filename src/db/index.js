import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { MONGODB_URL } from "../constants.js";

const connectDb = async() => {
    try {
       const connectionInstance =  await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
       console.log(`\n Mongo DB Connection set || DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error",error);
        process.exit(1);
    }
}

export default connectDb;