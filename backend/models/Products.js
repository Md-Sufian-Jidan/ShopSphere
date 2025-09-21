import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true },
        description: { type: String },
        price: { type: Number, required: true },
        stock: { type: Number, default: 0 },
        category: { type: String, required: true },
        images: [{ type: String }],
        isVisible: { type: Boolean, default: true },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
