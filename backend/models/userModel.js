import Mongoose from "mongoose"

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  isSubscriber: {
    type: Boolean,
    required: true,
    default: false
  },
  orderHistory: {
    type: Array,
    required: false,
  }
}, {
  timestamps: true
})

const User = Mongoose.model("user", userSchema)

export default User