// connecting reducers and middleware

import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productListReducer, 
  productDetailsReducer 
} from "./reducers/productReducers.js"
import { cartReducer } from "./reducers/cartReducers"

// quite a few reducers for clarity and ease of debugging
// each time we create an action we create constants, create reducer switch cases,
// add it to store, and then add actions
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem("cartItems")) 
: []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

