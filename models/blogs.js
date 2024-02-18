const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['hidden', 'visible'],
        default: 'hidden'
    }
})

module.exports = mongoose.model('Blog', blogsSchema);