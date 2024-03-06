const Comment = require("../models/comments")
const asyncHandler = require("express-async-handler");

exports.create_comment = asyncHandler(async (req, res, next) => {
    const date = Date();
    const comment = new Comment({
        author: req.body.author,
        content: req.body.content,
        date: date,
        status: "hidden",
        linkedPost: req.body.blogId
    })

    await comment.save();
    res.send(comment);
})

exports.get_comment = asyncHandler(async (req, res, next) => {
    const comments = await Comment.find({});

    res.send(comments);
})

exports.update_comment = asyncHandler(async (req, res, next) => {
    const comment_information = req.body._id;
    let commment_toggle = req.body.status;
    if (commment_toggle === "hidden") {
        commment_toggle = "visible"
    } else if (commment_toggle === "visible") {
        commment_toggle = "hidden"
    }
    const find_comment = await Comment.findOne({_id: comment_information})
    find_comment.status = commment_toggle;
    await find_comment.save();
})

exports.delete_comment = asyncHandler(async (req, res, next) => {
    const comment_id = req.body._id;
    const find_comment = await Comment.findOneAndDelete({_id: comment_id});
})