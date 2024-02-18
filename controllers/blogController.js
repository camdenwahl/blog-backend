const Blog = require("../models/blogs")
const asyncHandler = require("express-async-handler")


exports.create_blog = asyncHandler(async (req, res, next) => {
    const blog = new Blog({
        title: "Big Boys",
        date: 12/2/2001,
        content: "you know it!",
        status: "hidden"
    })

    await blog.save();
    res.send(blog);
})

exports.get_blogs = asyncHandler(async (req, res, next) => {
    const blogs = await Blog.find({});

    console.log(blogs);
    res.send(blogs);
})