import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import session from "express-session";

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: "CinemaSecretToken",
    resave: false,
    saveUninitialized: true
}));

dotenv.config()

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const port = process.env.PORT

mongoose.connect(url)
.then(console.log("Database is connected!")).catch(err => console.log("Database is not connected!", err))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})