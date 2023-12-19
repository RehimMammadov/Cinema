import mongoose from "mongoose";

const categoryModel = new mongoose.Schema(
    {
        title: { type: String, required: true }
    }
)