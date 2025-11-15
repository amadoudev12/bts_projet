const express = require('express')
const { getStudents,getStudent, createStudent, deleteStudent, editStudent } = require('../controllers/controller.etudiant')
const router = express.Router()


router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/', createStudent)
router.delete('/:id', deleteStudent)
router.put('/:id', editStudent)

module.exports = router