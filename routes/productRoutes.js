const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')
const {getProducts} = require('../controllers/productController')
const {getProduct} = require('../controllers/productController')
const {createProduct} = require('../controllers/productController')
const {updateProduct} = require('../controllers/productController')
const {deleteProduct} = require('../controllers/productController')

//get all product
router.get('/',getProducts);

//get product by id
router.get('/:id',getProduct);

//post product to database
router.post('/',createProduct);

// update product by id
router.put('/:id',updateProduct)

//delete product 
router.delete('/:id',deleteProduct)

module.exports = router;