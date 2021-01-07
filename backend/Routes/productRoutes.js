import express from "express"
const router = express.Router()
import { 
  getProducts, 
  getProductById,
  deleteProduct,
} from "../controllers/productController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").get(getProducts).post(protect, admin, createProduct)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)


export default router

// we want to return json objects for all errors so we need to do custom error handling - need to add custom middleware
// middleware is a function with access to the req/response cycle