import connectDb from "./db/index.js";
import { configDotenv } from "dotenv";
import { app } from "./app.js";
import { PORT } from "./constants.js";

configDotenv({path:"../.env"})

connectDb()
.then(() => {
    app.listen(PORT || 3000 , () => {
        console.log(`Server is running on port ${PORT}`);
    })
    app.on("error",(error) => {
            console.log(`Error on connectDB ${error}`);
            throw error;
        })
})
.catch((error) => {
    console.log("Mongo DB server not connected", error)
})