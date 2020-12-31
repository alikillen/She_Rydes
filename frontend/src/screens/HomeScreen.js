import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Row, Col, Container} from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProducts } from "../actions/productActions.js"
import Carousel from 'react-bootstrap/Carousel'



const HomeScreen = () => {
  // const dispatch = useDispatch()

  // const productList = useSelector(state => state.productList)
  // const { loading, error, products } = productList
  // // these are parts of the state that could be sent down

  // useEffect(() => {
  //   dispatch(listProducts())
  // }, [dispatch])
  // // this calls listProducts and fills up our state by passing the payloads into the reducer



  return (
    <>
    
    {/* style={{ 
      backgroundImage: "url(/images/Jackets/landing-img.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width:'100vw',
      height: '100vh'
       }} */}

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/jacket-carousel.jpg"
        alt="First slide"
      />
    
    <Carousel.Caption className='custom-carousel-caption'>
        
        <p>Along the coastline,
          into the outback,
          among the mountains,</p>
        <h2>She Rydes . . .</h2>
       </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/gloves-carousel.jpg"
        alt="Third slide"
      />
      <Carousel.Caption className='custom-carousel-caption'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/jeans-carousel.jpg"
        alt="Third slide"
      />

      <Carousel.Caption className='custom-carousel-caption'>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  
 {/* SHOP THE LOOK SECTION */}

  <h3>Shop The Look</h3>
  <Container>
  <Row>
    <Col sm>Image one comes here</Col>
    <Col sm>Image two comes here</Col>
    <Col sm>Image three comes here</Col>
  </Row>
</Container>

{/* Latest Products */}

      {/* <h1>Latest Products</h1>
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
      } */}
        
    </>
  )
}

export default HomeScreen
