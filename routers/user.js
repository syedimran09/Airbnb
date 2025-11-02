const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listings");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


//rendering signup page
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

//registering new user
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({
        email,
        username,
      });
      let registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to wanderlust!");
        res.redirect("/listings");
      }); 
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  })
);

//rendering login page
router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

//authentication of user
router.post('/login',saveRedirectUrl, passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
}), async (req, res) => {
    req.flash('success', 'Successfully logged in!');
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

//logout route
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash('success', 'You are logged out!');
    res.redirect('/listings');
  });
});

module.exports = router;
