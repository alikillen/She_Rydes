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

  

    <Carousel className='custom-carousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/jacket-carousel.jpg"
        alt="First slide"
      />
    
    <Carousel.Caption className='custom-carousel-caption'>
        
    <h3>
        Along the coastline, 
          <br></br>
        into the outback, 
          <br></br>
        among the mountains 
          <br></br>
        She Rydes . . .
    </h3>
       </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/gloves-carousel.jpg"
        alt="Third slide"
      />
      <Carousel.Caption className='custom-carousel-caption'>
      <h3>
        Along the coastline, 
          <br></br>
        into the outback, 
          <br></br>
        among the mountains 
          <br></br>
        She Rydes . . .
      </h3>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/HomeScreenImg/jeans-carousel.jpg"
        alt="Third slide"
      />

      <Carousel.Caption className='custom-carousel-caption'>
      <h3>
        Along the coastline, 
          <br></br>
        into the outback, 
          <br></br>
        among the mountains 
          <br></br>
        She Rydes . . .
      </h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  
 {/* SHOP THE LOOK SECTION */}
 
<div className='shop-the-look'>
  <h3>Shop The Look</h3>
  <Container>
  <Row>
    <Col sm>
    <a href='#'>
    <img
        // add link to the related gear
        className="custom-style-img"
        src="/images/HomeScreenImg/Black-denim-front-lifestyle.png"
        alt="shop the look image"
      />
    </a>
    </Col>
    <Col>
    <a href='#'>
    <img
        // add link to the related gear
        className="custom-style-img"
        src="/images/HomeScreenImg/Black-glove-lifestyle.png"
        alt="Shop the look second image"
      />
    </a>
    </Col>
 
  

    <Col sm>
    <a href='#'>
    <img
        // add link to the related gear
        className="custom-style-img"
        src="/images/HomeScreenImg/Pink-sunset-back-lifestyle.png"
        alt="Shop the look third image"
      />
    </a>
    
        
    </Col>


  </Row>

  {/* NEW ARRIVALS */}


  <div><h3>NEW Arrivals</h3></div>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Jackets/blue-bird-front.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Gloves/black-gloves-3.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Jackets/outback-outfitter-tan-front.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Accessories/coastal-cruiser-patch.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>



</Container>
</div>  
    </>
  )
}

export default HomeScreen
