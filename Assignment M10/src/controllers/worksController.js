const WorksModel = require('../models/WorksModel');

// Create a new work
const createWork = async (req, res) => {
  try {
    const workData = req.body;
    const newWork = new WorksModel(workData);
    const savedWork = await newWork.save();
    res.json(savedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implement other CRUD operations for works as needed

module.exports = {
  createWork,
  // Implement other controller functions here
};
