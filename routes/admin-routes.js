const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");

//Routes
//admin page

router.route("/").get(adminController.admin); //check these 2nd dot notations

//admin create book

router.route("/create-book").get(adminController.create); //check

//admin update book by ID

router.route("/update-book/:_id").get(adminController.update); //check

module.exports = router;
