const express = require('express');
const router = express.Router();

const userController = require("../Controllers/userController");
const adminController = require("../Controllers/adminController");
const subAdminController = require("../Controllers/subAdminController");
const postController = require("../Controllers/postController");

router.get('/userControllerC', userController.create);
router.get('/userControllerR', userController.read);
router.get('/userControllerD', userController.delete);
router.get('/userControllerU', userController.update);

router.get('/adminControllerC', adminController.create);
router.get('/adminControllerR', adminController.read);
router.get('/adminControllerD', adminController.delete);
router.get('/adminControllerU', adminController.update);

router.get('/subAdminControllerC', subAdminController.create);
router.get('/subAdminControllerR', subAdminController.read);
router.get('/subAdminControllerD', subAdminController.delete);
router.get('/subAdminControllerU', subAdminController.update);

router.get('/postControllerC', postController.create);
router.get('/postControllerR', postController.read);
router.get('/postControllerD', postController.delete);
router.get('/postControllerU', postController.update);

module.exports = router;