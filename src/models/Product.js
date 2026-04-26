// I will add the Product model placeholder
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    expiryDate:{
        type: Date,
        required: true
    },
    barcode:{
        type: String,
        required: true,
        unique: true
    },
  },
);
module.exports = mongoose.model("Product",productSchema);
