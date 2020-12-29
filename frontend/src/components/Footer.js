import { rainbow } from 'colors';
import React, { Component } from 'react'
import {Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image";

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer-custom-style'>
        <Container>
          <Row>
            <Col><Image src="/images/Logos/footer-logo.png" className="footer-logo" /></Col> 
          </Row>

          <Row>
            <Col>
              <h3 className='custom-footer-headers'>Important Links</h3>
              <Row>Sign in/ Sign up</Row>
              <Row>Contact us</Row>
              <Row>Shipping and Returns</Row>
              <Row>Terms and Condtions</Row>
              <Row>Privacy and Policy</Row>
            </Col>

            <Col>
              <h3 className='custom-footer-headers'>We are Social</h3>
                <Row>
                <a href="#">
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook-square fa-3x"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest fa-3x"></i>
                </a>

              </Row>
            </Col>
              
      
            
          
            {/* <Col> </Col>     */}
       
            <Col>
            <h3 className='custom-footer-headers'>Newsletter Subscription</h3>
            </Col>

          </Row>
         

          <Row>
            <Col className="custom-copyright text-center PY-3">
              Copyright 2020 &copy; She Rydes | All Rights Reserved | Built by Alison Killen and Sevda Amini
            </Col>
          </Row>
        </Container>
      </footer>
      
    )
  }
}

// using class component here not arrow func w variable