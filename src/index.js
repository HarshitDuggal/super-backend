import connectDb from "./db/index.js";
import { configDotenv } from "dotenv";
import { app } from "./app.js";

configDotenv({path:"../.env"})

connectDb()
.then(() => {
    app.listen(process.env.PORT || 3000 , () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    app.on("error",(error) => {
            console.log(`Error on connectDB ${error}`);
            throw error;
        })
})
.catch((error) => {
    console.log("Mongo DB server not connected", error)
})