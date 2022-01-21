const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

// basic setup
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(cookieParser());


// routes setup
const indexRouter = require('./routes/index');
const menuRouter = require('./routes/menu');
const reviewsRouter = require('./routes/reviews');
const galleryRouter = require('./routes/gallery');
const aboutUsRouter = require('./routes/aboutUs');
const onlineOrderingRouter = require('./routes/onlineOrdering');
const bookTableRouter = require('./routes/bookTable');

// routes forward
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/menu', menuRouter);
app.use('/reviews', reviewsRouter);
app.use('/gallery', galleryRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/onlineOrdering', onlineOrderingRouter);
app.use('/bookTable', bookTableRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((req, res, next) => {
    // set locals, only provide error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;