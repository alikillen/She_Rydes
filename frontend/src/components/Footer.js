// import { rainbow } from 'colors';
import React, { Component } from 'react'
import { Link } from "react-router-dom"
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
            <Col sm>
              <h3 className='custom-footer-headers'>Important Links</h3>
              <div className='important-links'>
              <Row>
                <Link to={"/login"}>Login / Sign Up</Link>
              </Row>
              <Row>
                <Link to={"/Contact"}>Contact</Link>
              </Row>
              <Row>
                <Link to={"/SizingCharts"}>Sizing Charts</Link>
              </Row>
              <Row>
                <Link to={"/Contact"}>Shipping and Returns</Link>
              </Row>
              <Row>
                <Link to={"/TermsandConditions"}>Terms and Conditions</Link>
              </Row>
              <Row>
                <Link to={"/PrivacyPolicy"}>Privacy Policy</Link>
              </Row>
              </div>
            </Col>

            <Col sm>
              <h3 className='custom-footer-headers'>We are Social</h3>
                <Row>
                <a href="https://www.instagram.com/she.rydes/">
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
                <a href="https://www.facebook.com/She.Rydes/">
                  <i class="fab fa-facebook-square fa-3x"></i>
                </a>
                <a href="https://www.pinterest.com.au/She_Rydes/_saved/">
                  <i class="fab fa-pinterest fa-3x"></i>
                </a>

              </Row>
            </Col>
              
    
       
            <Col sm>
            <h3 className='custom-footer-headers'>Newsletter Subscription</h3>
            </Col>

          </Row>
         

          <Row>
            <Col sm className="custom-copyright text-center PY-3">
              Copyright 2020 &copy; She Rydes | All Rights Reserved | Built by Alison Killen and Sevda Amini
            </Col>
          </Row>
        </Container>
      </footer>
      
    )
  }
}

// using class component here not arrow func w variable