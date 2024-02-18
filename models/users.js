const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
    }
})

module.exports = mongoose.model('User', userSchema);