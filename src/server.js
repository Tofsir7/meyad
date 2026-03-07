const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const { getProducts, addProduct, deleteProduct, expiredProducts } = require("./routes/productRoutes");
const { loginUser } = require("./routes/userRoutes");

app.get("/products/all", getProducts);
app.post("/products/add", addProduct);
app.delete("/products/delete", deleteProduct);
app.get("/products/expired", expiredProducts);
app.post("/user/login", loginUser);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
})