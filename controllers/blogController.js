const { QuillDeltaToHtmlConverter } = require("quill-delta-to-html");
const Blog = require("../models/blogs");
const Comment = require("../models/comments");
const asyncHandler = require("express-async-handler");


exports.create_blog = asyncHandler(async (req, res, next) => {
    const contentDelta = JSON.parse(req.body.content);
    const converter = new QuillDeltaToHtmlConverter(contentDelta.ops, {});
    const html = converter.convert();
    const blog = new Blog({
        title: req.body.title,
        date: Date(),
        content: html,
        status: "hidden"
    })

    await blog.save();
    res.send(blog);
})

exports.get_blogs = asyncHandler(async (req, res, next) => {
    const blogs = await Blog.find({});

    res.send(blogs);
})


exports.update_blog = asyncHandler(async (req, res, next) => {
    const blog_information = req.body._id;
    let blog_toggle = req.body.status;
    if (blog_toggle === "hidden") {
        blog_toggle = "visible"
    } else if (blog_toggle === "visible") {
        blog_toggle = "hidden"
    }
    const find_blog = await Blog.findOne({_id: blog_information})
    find_blog.status = blog_toggle;
    await find_blog.save();
})


exports.delete_blog = asyncHandler(async (req, res, next) => {
    const blog_id = req.body._id;
    const find_blog = await Blog.findOneAndDelete({_id: blog_id});
})

exports.get_comments = asyncHandler(async (req, res, next) => {
    const find_comments = await Comment.find({});
    res.send(find_comments);
})