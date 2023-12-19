import mongoose from "mongoose";

const categoryModel = new mongoose.Schema(
    {
        title: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("Category", categoryModel);