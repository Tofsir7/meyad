const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

// Connect Database
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});