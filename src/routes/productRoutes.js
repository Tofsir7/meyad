const getProducts = (req, res) => {
    res.status(200);
    res.send("Give me the lis of the products available on my shop")
}

const addProducts = (req, res) => {
    res.status(200);
    res.send("Add the products to the shop")
}

const deleteProducts = (req, res) => {
    res.status(200);
    res.send("Delete this product from my shop");
}

module.exports = { getProducts, addProducts, deleteProducts };