import mongoose from "mongoose";

const productModel = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
        image: { type: String, required: true },
        description: { type: String, required: true },
        actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor", required: true }]
    },
    { timestamps: true }
)

export default mongoose.model("Product", productModel);