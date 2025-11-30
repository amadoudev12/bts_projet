const express = require('express')
const { getStudentsController ,getStudentController , createStudentController , deleteStudentController , editStudentController , getNumberStudentController, addMoyenneController } = require('../controllers/controller.etudiant')
const router = express.Router()

router.get('/count',getNumberStudentController  )
router.get('/', getStudentsController )
router.post('/', createStudentController )
router.get('/moyenne/:id', addMoyenneController)
router.get('/:id', getStudentController )
router.delete('/:id', deleteStudentController)
router.put('/:id', editStudentController )


module.exports = router