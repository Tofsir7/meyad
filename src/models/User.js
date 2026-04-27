// i will design user model here
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
  },
);
module.exports = mongoose.model("User",userSchema);
