import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config()

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const port = process.env.PORT

mongoose.connect(url).catch(err => console.log("Database is not connected!"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})