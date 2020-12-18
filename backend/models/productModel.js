import Mongoose from "mongoose"
const reviewSchema = Mongoose.Schema(
  {
  name: {type: String, required: true},
  rating: {type: Number, required: true},
  comment: {type: String, required: true},
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, 
  {
  timestamps: true
  })


const productSchema = Mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
  },
  category:{
    type: String,
    enum: ["Jacket", "Pants", "Gloves", "Sticker", "Patch", "Accessories"],
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const Product = Mongoose.model("Product", productSchema)

export default Product