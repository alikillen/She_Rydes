import express from "express"
const router = express.Router()
import { 
  getProducts, 
  getProductById 
} from "../controllers/productController.js"

router.route("/").get(getProducts)
router.route("/:id").get(getProductById)


export default router

// we want to return json objects for all errors so we need to do custom error handling - need to add custom middleware
// middleware is a function with access to the req/response cycle