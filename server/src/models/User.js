import mongoose from "mongoose";

const userModel = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("User", userModel);