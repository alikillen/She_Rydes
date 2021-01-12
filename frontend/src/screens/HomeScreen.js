import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Row, Col, Container, Form, Button, Image} from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProducts } from "../actions/productActions.js"
import Carousel from 'react-bootstrap/Carousel'
import backgroundVideo from '../video/backgroundVideo.mp4'





const HomeScreen = () => {

  return (
    <>
      <div className="video-section">
        <video autoPlay loop muted  id='video'>
          <source src={ backgroundVideo } type='video/mp4'/>
        </video>

        <div className="video-text">
        <p>
        <span id="sherydes-bold">She Rydes</span> is an Australian owned, Gold Coast based 
        <br />
        company that is dedicated to providing women
        riders <br />
        with quality protective gear. <br />
        Our vision is to empower your ride with gear that is
        <br />
        affordable and effortlessly stylish.
        </p>
        </div>

        <div className="explore-range-text">
          <p className="animate__animated animate__fadeInLeft">Explore the range now...</p>
          <div>
            <Button size="lg" id="explore-range-button" className="animate__animated animate__fadeInLeft">
              Shop Products
            </Button>{' '}
          </div>
        </div>
     
        
      </div>
  

{/* Static picture and words animation */}
  
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Jackets/static-bg.png'})`,
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      
    }}>
    
    <div className="poem">
       {/* <p id="poem-paragraph"> */}
       <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" className="line-one">Along the coastline</div>
       <div data-aos="fade-up" data-aos-delay="600"  data-aos-duration="2000" className="line-two">into the outback</div>
       <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="2000"  className="line-three">among the mountains</div>
       <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="2000" className="line-four" id='sherydes-bold'>She Rydes . . .</div>
    </div>
   
      
       
        
        
    </div>
     
  
 {/* SHOP THE LOOK SECTION */}
 
<div className='shop-the-look'>
<div id="shop-the-look-div">
<h3 id='shop-the-look-header'>Shop The Look</h3>
</div>

  
<Container>
  <Row className="carousel-custom">
    <Col sm>
      <Carousel data-aos="fade-down" data-aos-delay="500" data-aos-duration="2000">
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
            src="/images/Jackets/blue-bird-front.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Col>
    <Col>
      <Carousel data-aos="fade-down" data-aos-delay="1500" data-aos-duration="2000">
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
            src="/images/Jackets/blue-bird-front.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    </Col>
 
    <Col sm>
      <Carousel data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
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
            src="/images/Jackets/blue-bird-front.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    </Col>


  </Row>

</Container>
</div>  
    </>
  )
}

export default HomeScreen
