const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required : true
        },
        last_name: {
            type: String,
            required : true
        },
        dob: {
            type: String,
            required : true
        },
        email: {
            type: String,
            required : true
        },
        gender: {
            type: String,
            required : true
        },
        phone: {
            type: String,
            required : true
        },
        password: {
            type: String,
            required : true
        },
    },
    {
        timestamps: true,
    }
);
module.exports = { User : mongoose.model("users", userSchema) };
