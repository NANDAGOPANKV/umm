const Book = require("../model/bookModel");

// get all book
const getAllBook = async (req, res, next) => {
  let book;
  try {
    book = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No Outputs" });
  }
  return res.status(200).json({ book });
};

// add/insert book
const addBook = async (req, res, next) => {
  let book;
  const { name, author, price, description, available, image } = req.body;
  try {
    book = new Book({
      name,
      author,
      price,
      description,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Insert Data" });
  }
  return res.status(200).json({ book });
};

// get data/book by ID
const getById = async (req, res, next) => {
  let book;
  let id = req.params.id;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No Books Found" });
  }
  return res.status(201).json({ book });
};

// put/edit data/book by ID
const getByIdEdit = async (req, res, next) => {
  let book;
  let id = req.params.id;
  let { name, author, description, price, available } = req.body;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable To Update This Id" });
  }
  return res.status(200).json({ book });
};

// delete data/book by ID
const deleteById = async (req, res, next) => {
  let id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(403).json({ message: "Unable To Delete This ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

module.exports = { getAllBook, addBook, getById, getByIdEdit, deleteById };
