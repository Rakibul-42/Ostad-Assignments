const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController'); // Import the controller
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware'); // Import the authentication middleware

// Define routes for works
router.post('/', AuthVerifyMiddleware, worksController.createWork); // Create a new work with authentication
router.get('/', worksController.getAllWorks); // Get all works
router.get('/:id', worksController.getWorkById); // Get a specific work by ID
router.put('/:id', AuthVerifyMiddleware, worksController.updateWork); // Update a work with authentication
router.delete('/:id', AuthVerifyMiddleware, worksController.deleteWork); // Delete a work with authentication

module.exports = router;
