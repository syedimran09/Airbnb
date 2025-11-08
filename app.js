require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user.js');
const passport = require('passport');
const localStratergy = require('passport-local');

const listingsRouter = require("./routers/listings.js");
const reviewsRouter = require("./routers/reviews.js");
const usersRouter = require("./routers/user");

const app = express();
const port = 3001;
const sessionOptions = {
    secret: 'myseceretcode',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(session(sessionOptions));
app.use(flash());

//Establishing connection with mongodb
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then(() => {
    console.log("connected to Db");
})
.catch((err) => {
    console.log(err);
});

//authentication
//login or signin middlewares
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware for flashing msg's
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});

//listings router
app.use("/listings", listingsRouter);

//reviews router
app.use("/listings/:id/reviews", reviewsRouter);

//users router
app.use("/", usersRouter);

//Unknow api call
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

//middleware for create listing
app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs", {message});

});

//established server
app.listen(port, (req, res) => {
    console.log("server listening on port 3001");
});