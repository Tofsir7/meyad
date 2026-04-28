const Product = require("../models/Product");
const getProducts = async(req, res) => {
    const products = await Product.find();
    //console.log("Products found!!");
    res.status(200).json(products);
}

const addProduct = async(req, res) => {
    const { name, category, expiryDate, barcode } = req.body;
    if (!name || !category || !expiryDate || !barcode) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const product = await Product.findOne({ barcode });
    if (product) {
        return res.status(400).json({ message: "Product already exists" });
    }
    const newProduct = await Product.create({ name, category, expiryDate, barcode });
    res.status(201).json(newProduct);
}

const deleteProduct = async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    await product.remove();
    res.status(200).json({ message: "Product removed" });
}
const expiredProducts = async(req, res) => {
    const expired = await Product.find({ expiryDate: { $lt: new Date() } });
    if(expired.length === 0){
        return res.status(404).json({ message: "No expired products found" });
    }   
    res.status(200).json(expired);
}


module.exports = { getProducts, addProduct, deleteProduct, expiredProducts };
