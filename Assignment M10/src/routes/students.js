const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController'); // Import the controller

// Define routes for students
router.post('/', studentsController.createStudent); // Create a new student
router.get('/', studentsController.getAllStudents); // Get all students
router.get('/:id', studentsController.getStudentById); // Get a specific student by ID
router.put('/:id', studentsController.updateStudent); // Update a student
router.delete('/:id', studentsController.deleteStudent); // Delete a student

module.exports = router;
