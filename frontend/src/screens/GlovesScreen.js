import React, { useEffect } from 'react'
import Product from "../components/Product"
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductsByCategory } from '../actions/productActions'

const GlovesScreen = () => {
  
  const dispatch = useDispatch()

  const productCategory = useSelector((state) => state.productCategory)
  const { loading, error, products } = productCategory


  try {

    useEffect(() => {
      dispatch(listProductsByCategory("Gloves"))
    }, [dispatch])

    console.log("useeffect dispatched, should return")
  

    return (
      <div>
  
        <h1>Gloves</h1>
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
          
      </div>
    )

    // no errors but nothing returned
    
  } catch (error) {
    console.log("cant return page")
  }

  
}

export default GlovesScreen
