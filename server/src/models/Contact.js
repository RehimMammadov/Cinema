import mongoose from "mongoose";

const contactModel = new mongoose.Schema(
    {
        userName: { type: String, required: true, unique: true },
        message: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("Contact", contactModel);