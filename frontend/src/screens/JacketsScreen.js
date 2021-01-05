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

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList
  // these are parts of the state that could be sent down

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])
  // this calls listProductsbycategory and fills up our state by passing the payloads into the reducer



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
}

export default JacketsScreen