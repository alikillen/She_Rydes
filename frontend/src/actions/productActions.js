import axios from "axios"


import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SKU_REQUEST,
  PRODUCT_LIST_SKU_SUCCESS,
  PRODUCT_LIST_SKU_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,

  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  

} from "../constants/productConstants.js"

import { logout } from './userActions'

// list products action
// depending on request, we dispatch diff success/fail messages to the reducer
// we determine the payload (either data or an error) to be passed to the reducer

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get("/api/products")

    // const { data } = await API.get(`/products`);

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

// this method is not being used for now - in future we would like to use it to make sure items on the homescreen only render by SKU, not by id. as there will be multiple products of same SKU with different sizes/colors etc
export const listProductsbySKU = (sku) => async (dispatch) => {
  // let category = req.params.id
  try {
    dispatch({ type: PRODUCT_LIST_SKU_REQUEST })
    const { data } = await axios.get(`api/products/sku/${sku}`)

    dispatch({
      type: PRODUCT_LIST_SKU_SUCCESS,
      payload: data,
    })
  } catch (error) {
     dispatch({
       type: PRODUCT_LIST_SKU_FAIL,
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
    // this is where dispatch was erroring - category is undefined

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
// changes made - not passing in category and interpolating string

// using this to get top reviewed products to pass into the top products carousel

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })
    const { data } = await axios.get(`/api/products/top`)

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
     dispatch({
       type: PRODUCT_TOP_FAIL,
       payload: error.response && error.response.data.message 
       ? error.response.data.message 
       : error.message
     })
  }
}

// Delete Product Action

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    })
  }
}


// Create Product Action

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data} = await axios.post(`/api/products`, {}, config)

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: 
        error.response && error.response.data.message
         ? error.response.data.message : error.message
    })
  }
}

//Update product action
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    )

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // making sure the bearer token is set as auth so that when logged in they can post a review

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload: message,
    })
  }
}
