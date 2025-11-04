const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listings");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  //rendering signup page
  .get(userController.renderSignin)
  //registering new user
  .post(wrapAsync(userController.nweRegst));

router
  .route("/login")
  //rendering login page
  .get(userController.renderLogin)
  //authentication of user
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.authUser
  );

//logout route
router.get("/logout", userController.logOut);

module.exports = router;
