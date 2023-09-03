const express = require('express');
const router = express.Router();

const blogController = require("../Controllers/blogController");
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");
const profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController");
const serviceController = require("../Controllers/serviceController");
const titleController = require("../Controllers/titleController");

// Blog Controller Routes
router.get('/createBlog', blogController.create);
router.get('/readBlogs', blogController.read);
router.get('/deleteBlog', blogController.delete);
router.get('/updateBlog', blogController.update);

// Blog Details Controller Routes
router.get('/createBlogDetails', blogDetailsController.create);
router.get('/readBlogDetails', blogDetailsController.read);
router.get('/deleteBlogDetails', blogDetailsController.delete);
router.get('/updateBlogDetails', blogDetailsController.update);

// Comment Controller Routes
router.get('/createComment', commentController.create);
router.get('/readComments', commentController.read);
router.get('/deleteComment', commentController.delete);
router.get('/updateComment', commentController.update);

// Message Controller Routes
router.get('/createMessage', messageController.create);
router.get('/readMessages', messageController.read);
router.get('/deleteMessage', messageController.delete);
router.get('/updateMessage', messageController.update);

// Portfolio Controller Routes
router.get('/createPortfolio', portfolioController.create);
router.get('/readPortfolios', portfolioController.read);
router.get('/deletePortfolio', portfolioController.delete);
router.get('/updatePortfolio', portfolioController.update);

// Product Controller Routes
router.get('/createProduct', productController.create);
router.get('/readProducts', productController.read);
router.get('/deleteProduct', productController.delete);
router.get('/updateProduct', productController.update);

// Profit Controller Routes
router.get('/createProfit', profitController.create);
router.get('/readProfits', profitController.read);
router.get('/deleteProfit', profitController.delete);
router.get('/updateProfit', profitController.update);

// Project Controller Routes
router.get('/createProject', projectController.create);
router.get('/readProjects', projectController.read);
router.get('/deleteProject', projectController.delete);
router.get('/updateProject', projectController.update);

// Service Controller Routes
router.get('/createService', serviceController.create);
router.get('/readServices', serviceController.read);
router.get('/deleteService', serviceController.delete);
router.get('/updateService', serviceController.update);

// Title Controller Routes
router.get('/createTitle', titleController.create);
router.get('/readTitles', titleController.read);
router.get('/deleteTitle', titleController.delete);
router.get('/updateTitle', titleController.update);

module.exports = router;
