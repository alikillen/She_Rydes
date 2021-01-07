import axios from "axios"

import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL
} from "../constants/productConstants.js"

// list products action
// depending on request, we dispatch diff success/fail messages to the reducer
// we determine the payload (either data or an error) to be passed to the reducer

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get("/api/products")

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
     dispatch({
       type: PRODUCT_LIST_FAIL,
       payload: error.response && error.response.data.message 
       ? error.response.data.message 
       : error.message
     })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
     dispatch({
       type: PRODUCT_DETAILS_FAIL,
       payload: error.response && error.response.data.message 
       ? error.response.data.message 
       : error.message
     })
  }
}

export const listProductsByCategory = (category) => async (dispatch) => {
  // let category = req.params.id
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST })
    const { data } = await axios.get(`api/products/category/${category}`)
    // this is where dispatch is erroring - category is undefined

    dispatch({
      type: PRODUCT_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
     dispatch({
       type: PRODUCT_CATEGORY_FAIL,
       payload: error.response && error.response.data.message 
       ? error.response.data.message 
       : error.message
     })
  }

}