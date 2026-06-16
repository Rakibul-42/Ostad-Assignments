const express = require('express');
const router = express.Router();

const blogController = require("../Controllers/blogController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");

router.get('/createBlog', blogController.create);
router.get('/readBlogs', blogController.read);
router.get('/deleteBlog', blogController.delete);
router.get('/updateBlog', blogController.update);

router.get('/createComment', commentController.create);
router.get('/readComments', commentController.read);
router.get('/deleteComment', commentController.delete);
router.get('/updateComment', commentController.update);

router.get('/createMessage', messageController.create);
router.get('/readMessages', messageController.read);
router.get('/deleteMessage', messageController.delete);
router.get('/updateMessage', messageController.update);

router.get('/createPortfolio', portfolioController.create);
router.get('/readPortfolios', portfolioController.read);
router.get('/deletePortfolio', portfolioController.delete);
router.get('/updatePortfolio', portfolioController.update);

router.get('/createProduct', productController.create);
router.get('/readProducts', productController.read);
router.get('/deleteProduct', productController.delete);
router.get('/updateProduct', productController.update);

module.exports = router;