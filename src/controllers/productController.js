const getProducts = (req, res) => {
    res.status(200).send("Give me the lis of the products available on my shop");
}

const addProduct = (req, res) => {
    res.status(200).send("Add the products to the shop");
}

const deleteProduct = (req, res) => {
    res.status(200).send("Delete this product from my shop");
}

const expiredProducts = (req, res) => {
    res.status(200).send("All the products have been expired");
}

module.exports = { getProducts, addProduct, deleteProduct, expiredProducts };
