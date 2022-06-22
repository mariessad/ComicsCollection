const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");

//Routes

router.route("/").get(siteController.index);

router.route("/about").get(siteController.about);

router
  .route("/login")
  .get(siteController.login_get)
  .post(siteController.login_post);

router
  .route("/register")
  .get(siteController.register_get)
  .post(siteController.register_post);

router.route("/logout").get(siteController.logout);

router.route("/auth/google").get(siteController.google_get);

router
  .route("/auth/google/admin-console")
  .get(siteController.google_redirect_get);

//profile page
router
  .route("/profile")
  .get(siteController.profile_create_get)
  .post(siteController.profile_create_post);

module.exports = router;
