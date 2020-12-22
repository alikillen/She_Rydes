import { rainbow } from 'colors';
import React, { Component } from 'react'
import {Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark">
        <Container>
          <Row>
            <Col><Image src="logo-desktop.png" className="my-auto" /></Col> 
          </Row>

          <Row>

            <Col>
              <h3>Important Links</h3>
              <Row>Sign in/ Sign up</Row>
              <Row>Contact us</Row>
              <Row>Shipping and Returns</Row>
              <Row>Terms and Condtions</Row>
              <Row>Privacy and Policy</Row>
            </Col>

            <Col>
              <h3>We are Social</h3>
                <Row>
                <a href="#">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest fa-2x"></i>
                </a>

              </Row>
            </Col>
              
      
            
          
            <Col> </Col>    
       
            <Col><h3>Newsletter Subscription</h3></Col>

          </Row>
         

          <Row>
            <Col className="text-center py-3">
              Copyright 2020 &copy; She Rydes | All Rights Reserved | Built by Alison Killen and Sevda Amini
            </Col>
          </Row>
        </Container>
      </footer>
      
    )
  }
}

// using class component here not arrow func w variable