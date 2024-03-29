var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs')
const cors = require('cors');
const multer = require("multer");
const upload = multer();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const app = express();
const port = 3000;
const RateLimit = require("express-rate-limit");
const mongoose = require("mongoose");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('trust proxy', 1); // Trust first proxy

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.PASSWD}@cluster0.n7b0nqu.mongodb.net/blog_database?retryWrites=true&w=majority`);
}


const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
app.use(limiter);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.port, () => 
console.log(`Server running on  localhost:${port}`));

module.exports = app;
