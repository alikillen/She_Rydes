// connecting reducers and middleware

import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productListReducer, 
  productDetailsReducer 
} from "./reducers/productReducers.js"
import { cartReducer } from "./reducers/cartReducers"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers"

// quite a few reducers for clarity and ease of debugging
// each time we create an action we create constants, create reducer switch cases,
// add it to store, and then add actions
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem("cartItems")) 
: []

const userInfoFromStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo")) 
: null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

