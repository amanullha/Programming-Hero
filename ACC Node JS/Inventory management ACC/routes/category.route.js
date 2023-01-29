const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/category.controller')


router.route('/')
    .get(categoryController.getCategory)
    .post(categoryController.createCategory)

router.route('/:id')
    .get(categoryController.getByIdCategory)
    .patch(categoryController.updateByIdCategory)



module.exports = router;









































