const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')


//show all product
const getProducts= asyncHandler(async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);

    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
}
)
// show product by id
const getProduct =asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product =await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(404);
        throw new Error(error.message);
    }
}
)

//create product
const createProduct =asyncHandler(async(req,res)=>{
    try{
     const product= await Product.create(req.body)
     res.status(200).json(product);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
 
    }
 }
)

 //update product by id
const updateProduct = asyncHandler(async(req,res)=>{
    try{
        const{id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404);
            throw new Error(`connot find any product with ID ${id}`);
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
}
)
//delete product by id
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404);
            throw new Error(`Cannot find any product with ID ${id}`);
        }
        res.status(200).json(product);
    } catch (error) {  
        res.status(500);
        throw new Error(error.message);
    }
});
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}