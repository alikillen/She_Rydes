import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Product from "../models/productModel.js"


// get all products
// route- GET/api/products
// access - public
router.get("/", asyncHandler(async (req, res) => {
  const products = await Product.find({})
  // passing in empty obj will return all products
  // will return a promise (mongoose methods) so we need to use async/await or .then
  // error handling with express-async-handler middleware - for handling exceptions in your express handler routes
  // wrap with asynchandler
  res.json(products)
}))


// gets products with a certain ID
// route- GET/api/products/:id
// access - public
router.get("/:id", asyncHandler(async (req, res) => {
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
)

export default router

// we want to return json objects for all errors so we need to do custom error handling - need to add custom middleware
// middleware is a function with access to the req/response cycle