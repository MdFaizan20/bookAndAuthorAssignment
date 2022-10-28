const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController.js")
const authorController= require("../controllers/authorController")

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsName", authorController.getAuthorData)

router.post("/createBooks", bookController.createBooks)

router.get("/getAuthorBook", bookController.getAuthorBook)

router.get("/getAuthorBookList", bookController.getAuthorBookList)

router.put("/updateBookPrice", bookController.updateBookPrice)

router.get("/bookByPrice", bookController.bookByPrice)

module.exports = router;








