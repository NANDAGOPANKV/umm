const express = require("express");
const router = express.Router();

const {
  getAllBook,
  addBook,
  getById,
  getByIdEdit,
  deleteById,
} = require("../controllers/BookController");

// get book/data
router.get("/books", getAllBook);

// add/post book/data
router.post("/add-books", addBook);

// get book/data by ID
router.get("/:id", getById);

// update/put book/data by ID
router.put("/:id", getByIdEdit);

// delete book/data by ID
router.delete("/:id", deleteById);

module.exports = router;
