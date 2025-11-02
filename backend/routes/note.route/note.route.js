const exprss = require('express');
const { getNotes, createNote, deleteNote, editNote, getNoteById } = require('../../controllers/controller.note/controller.note');
const router = exprss.Router();

router.get('/',getNotes);
router.get('/:id',getNoteById);
router.post('/:id',createNote);
router.delete('/:id',deleteNote);
router.patch('/',editNote);

module.exports = router;