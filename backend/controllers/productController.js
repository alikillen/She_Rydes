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

 // get products by SKU
// route - Get /api/products/SKU
// access - public
const getProductsbySKU = asyncHandler(async(req,res) => {
  const products = await Product.find({sku: req.params.sku})

  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error("Products with SKU not found")
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
    category: 'Jacket',
    countInStock: 0,
    SKU: 'OBOF',
    description: 'Sample description',
    size: 14,
    color: "black",
    accessoryType: "none"
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
 })


  //@desc    UPDATE a product
// @route   PUT/api/products/:id
// @access  Private/Admin

// what about passing user in? is this just for admin user
const updateProduct = asyncHandler(async (req, res) => {
  const {name,
         price,
         description,
         image,
         category,
         countInStock,
         SKU,
         size,
         color,
         accessoryType,
        } = req.body

  const product = await Product.findById(req.params.id)

  if(product) {

    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.size = size
    product.category = category
    product.sku = SKU
    product.countInStock = countInStock
<<<<<<< HEAD
    
=======
    product.size = size
    product.color = color
    product.accessoryType = accessoryType
>>>>>>> 4197531030f2bb350c4324845a0721ba9e15a3d7

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
 
  
 })

  //@desc   create new review
// @route   POST/api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed by user')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

 export {
   getProducts,
   getProductById,
   getProductsbySKU,
   getProductsbyCategory,
   getTopProducts,
   deleteProduct,
   createProduct,
   updateProduct,
   createProductReview
 }