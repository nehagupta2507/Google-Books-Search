const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// same as "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// same as "/api/books/:id"
router
  .route("/:id")
  .delete(bookController.remove);

module.exports = router;