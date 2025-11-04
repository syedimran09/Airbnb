const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listings");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


//rendering signup page
router.get("/signup", userController.renderSignin);

//registering new user
router.post(
  "/signup",
  wrapAsync(userController.nweRegst)
);

//rendering login page
router.get('/login', userController.renderLogin);

//authentication of user
router.post('/login',saveRedirectUrl, passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
}), userController.authUser);

//logout route
router.get('/logout', userController.logOut);

module.exports = router;
