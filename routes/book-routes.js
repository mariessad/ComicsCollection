const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book-controller");

//Routes

// app.get("/books/:id", (req, res) => {
//   res.render("pages/book", {});
// });
router.route("/").post(bookController.bookCreate);

router
  .route("/:_id")
  .get(bookController.bookGet)
  .put(bookController.bookUpdate)
  .delete(bookController.bookDelete);
// .post(bookController.bookCreate);

module.exports = router;
