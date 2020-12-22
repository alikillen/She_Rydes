import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image";

export default class Header extends Component {
  render() {
    return (
     
     
      <header>
       <Container style={
         {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
         }
       }>
          <Row>
            <Col><Image src="logo-desktop.png" className="my-auto" /></Col>
          </Row>

      </Container> 
        
        
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
            <LinkContainer to ="/">
            <Nav.Link>
              Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to ="/about">
            <Nav.Link>
              About</Nav.Link>
            </LinkContainer>

            <LinkContainer to ="/cart">
            <Nav.Link>
              Products</Nav.Link>
            </LinkContainer>
            </Nav>

            <Nav className="justify-content-end ml-auto">
            <LinkContainer to ="/login">
              <Nav.Link><i className="fas fa-user"></i>
              Sign in/Register</Nav.Link>
            </LinkContainer>

            <LinkContainer to ="/cart">
            <Nav.Link><i className="fas fa-shopping-cart"></i>
              Cart</Nav.Link>
            </LinkContainer>
            </Nav>
          
              
            {/* </Nav>          */}
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

// using class component here not arrow func w variable