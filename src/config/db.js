// Database connection 
const connectDB = async () => {
    try {
        // I will connect to MongoDB here
        console.log("Database connected Successfully");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
