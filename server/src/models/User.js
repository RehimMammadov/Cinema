import mongoose from "mongoose";

const userModel = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        username: { type: String, unique: true, required: true, minLength: [8, "Symbol count must be min 8"], maxLength: [20, "Symbol count must be max 20"] },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("User", userModel);