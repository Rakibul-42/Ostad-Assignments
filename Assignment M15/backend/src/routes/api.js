const { createStudentData, updateStudentData, deleteStudentData, readStudentData, readStudentDataById } = require('../controller/studentRegistrationController')

const router = require('express').Router()

router.post("/create-student-data" , createStudentData)
router.post("/update-student-data/:id" , updateStudentData)
router.get("/student-data" , readStudentData)
router.get("/student-data/:id" , readStudentDataById)
router.get("/delete-student-data/:id" , deleteStudentData)

module.exports = router;