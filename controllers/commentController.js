const Comment = require("../models/comments")
const asyncHandler = require("express-async-handler");

exports.create_comment = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const date = Date();
    const comment = new Comment({
        author: req.body.author,
        content: req.body.content,
        date: date,
        status: "hidden"
    })

    await comment.save();
    res.send(comment);
})

exports.get_comment = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const comment = new Comment({
        author: "your mom",
        content: "Npot yawdw",
        date: 10/20/1929,
        status: "hidden"
    })

    res.send(comment);
})