// Database connection 
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        // I will connect to MongoDB here
        conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error found: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
