const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const ListingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router
  .route("/")
  //index route
  .get(wrapAsync(ListingController.index))
  //create new listing
  // .post(
  //   isLoggedIn,
  //   validateListing,
  //   wrapAsync(ListingController.createNewListing)
  // );
  .post(upload.single("listing[image]"), (req, res) => {
    res.send(req.file);
  });

//Rendering new listing ejs template
router.get("/new", isLoggedIn, ListingController.renderNewListing);

router
  .route("/:id")
  //show route
  .get(wrapAsync(ListingController.showListing))
  //Updating data in DB
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(ListingController.updateListing)
  )
  //Delete route
  .delete(isLoggedIn, isOwner, wrapAsync(ListingController.deleteListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.editListing)
);

module.exports = router;
