const express = require('express')
const router = express.Router()
const userController = require('../controllers/newsHead')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.get('/get-news-head/:id', userController.getNewsHead)
router.get('/get-news-head', userController.getAllNewsHead)
router.post('/add-news-head', upload.single('image'), userController.addNewsHead)
router.put('/edit-news-head/:id', upload.single('image'), userController.editNewsHead)
router.delete('/delete-news-head/:id', userController.deleteNewsHead)


module.exports = router