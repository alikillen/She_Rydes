import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import {
  getProducts,
  getProductById,
  getProductsbySKU,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductsbyCategory,
  getTopProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/category/:id").get(getProductsbyCategory);

// router.route("/sku/:id").get(getProductsbySKU)

// console.log(mongoose.Types.ObjectId.isValid('5ffc38e7fcc8860188ff1cd7'));
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;

// we want to return json objects for all errors so we need to do custom error handling - need to add custom middleware
// middleware is a function with access to the req/response cycle
