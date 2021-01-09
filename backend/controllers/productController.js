import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"


// get all products
// route- GET/api/products
// access - public

  // passing in empty obj will return all products
  // will return a promise (mongoose methods) so we need to use async/await or .then
  // error handling with express-async-handler middleware - for handling exceptions in your express handler routes
  // wrap with asynchandler

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// gets products with a certain ID
// route- GET/api/products/:id
// access - public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
    // when we want to throw an error with a response, we can set the status 
    // and throw a new error - no need for res.json and it will all be formattted same
  }
 })



// get products by category
// route - Get /api/products/category
// access - public
 const getProductsbyCategory = asyncHandler(async(req,res) => {
  const products = await Product.find({category: req.params.id})

  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error("Products in category not found")
  }

})


// get top rated products
// route GET api/products/top
// public access

const getTopProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error("Products in top 3 not found")
  }

})


 //@desc    dELETE a product
// @route   DELETE/api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  
  if (product) {
    await product.remove()
    res.json({ message: 'Product removed'})
  } else {
    res.status(404)
    throw new Error("Product not found")
    // when we want to throw an error with a response, we can set the status 
    // and throw a new error - no need for res.json and it will all be formattted same
  }
 })

  //@desc    CREATE a product
// @route   POST/api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: '0',
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Sample category',
    countInStock: 0,
    description: 'Sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
 })


  //@desc    UPDATE a product
// @route   PUT/api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {name,
         price,
         description,
         image,
         category,
         size, 
         countInStock } = req.body

  const product = await Product.findById(req.params.id)

  if(product) {

    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.size = size
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
 
  
 })

 export {
   getProducts,
   getProductById,
   getProductsbyCategory,
   getTopProducts,
   deleteProduct,
   createProduct,
   updateProduct
 }