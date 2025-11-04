const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const {
  validateReviews,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewsController = require("../controllers/reviews.js");

// post review route
router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewsController.postReview)
);

//Delet review route
router.delete(
  "/:review_id",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsController.deleteReview)
);

module.exports = router;
