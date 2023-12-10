
const express = require('express')
const router = express.Router()
const userController = require('../controllers/news')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.get('/get-news/:id', userController.getNews)
router.get('/get-news', userController.getAllNews)
router.post('/add-news', upload.single('image'), userController.addNews)
router.put('/edit-news/:id', upload.single('image'), userController.editNews)
router.delete('/delete-news/:id', userController.deleteNews)


module.exports = router