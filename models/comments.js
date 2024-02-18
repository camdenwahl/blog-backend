const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
    },
    content: {
        type: String,
        required: true,
        minLength: 10,
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["hidden", "visible"],
        default: "hidden"
    }
})

module.exports = mongoose.model("Comment", commentsSchema);