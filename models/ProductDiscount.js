import mongoose from "mongoose";

const ProductDiscount = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  discount: { type: Number, required: true, default: 0 }, // Default discount is 0%
  discountPrice: { type: Number, default: 0 }, 
  
});

const ProductDiscountModel = mongoose.model("ProductDiscount", ProductDiscount);

export default ProductDiscountModel;
