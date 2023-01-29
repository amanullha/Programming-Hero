
const express = require('express')
const router = express.Router();

const multer = require('multer');
const uploader = require('../middleware/uploader')

const productController = require('../controllers/product.controller')


router.post("/file-upload", uploader.array("image"), productController.fileUpload)


router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)


router.route('/bulk-update')
    .patch(productController.bulkUpdateProduct)
    .delete(productController.bulkDeleteProduct)


router.route('/:_id')
    .patch(productController.updateProduct)
    .delete(productController.deleteProductById)


module.exports = router;





















