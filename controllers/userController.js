const User = require("../models/users");
const asyncHandler = require('express-async-handler');

exports.create_user = asyncHandler(async (req, res, next) => {
    const user = new User({name: "brad pitt", password: "hellobro"});

    await user.save();
    res.send(user);
})

