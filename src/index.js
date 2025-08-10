import connectDb from "./db/index.js";
import { configDotenv } from "dotenv";

configDotenv({path:"../.env"})

connectDb();