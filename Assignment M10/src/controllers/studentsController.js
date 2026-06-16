const StudentsModel = require('../models/StudentsModel');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = new StudentsModel(studentData);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implement other CRUD operations for students as needed

module.exports = {
  createStudent,
  // Implement other controller functions here
};
