import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product" 
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProductsByCategory } from "../actions/productActions.js"


// this page needs edits to render products that match jacket category and nothing else, error handling etc

const JacketsScreen = () => {
  const dispatch = useDispatch()

  console.log("useDispatch done")

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  console.log("useSelector done with state")
  // these are parts of the state that could be sent down

  try {
    useEffect(() => {
      dispatch(listProductsByCategory())
      // this is where dispatch is erroring
      console.log("useEffect dispatched")
    }, [dispatch])
    // this calls listProductsbycategory and fills up our state by passing the payloads into the reducer
    // do we need to change this specifying that jackets must match category params???
  
  console.log("should return products on page here")

  return (
    <>
      <h1>Jackets</h1>
      {loading ? (
        <Loader /> )
        : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
      <Row>
          {products.map(product=>
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
            )}
        </Row>) 
      }
        
    </>
  )
    
  } catch (error) {
    console.log("something wrong with useEffect, useDispatch or listproductsbycat method?")    
  }  



}

// try catch isnt getting anything - no errors, just not returning products by cat as it should
// need a new jackets component??

export default JacketsScreen