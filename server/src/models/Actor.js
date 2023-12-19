import mongoose from "mongoose";

const actorModel = new mongoose.Schema(
    {
        fullName: { type: String, required: true }
    }, 
    { timestamps: true }
)

export default mongoose.model("Actor", actorModel);