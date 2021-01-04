import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import {Navbar, Nav, Container,Row, Col, Image, NavDropdown } from "react-bootstrap"
import { logout } from "../actions/userActions"

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo } = userLogin

    const logoutHandler = () => {
      dispatch(logout())
    }

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
              <Col><Image src="logo-desktop.png" className="custom-logo" /></Col>
            </Row>

        </Container> 
          
          
          <Navbar variant="dark" expand="lg" collapseOnSelect className='custom-navbar'>
          <Container>
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="custom-nav ml-auto">
                    <LinkContainer to ="/">
                    <Nav.Link>
                      Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to ="/about">
                    <Nav.Link>
                      About</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Gloves</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Jackets</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Stickers/Patches</NavDropdown.Item>
                    </NavDropdown>

                    {/* <LinkContainer to ="#">
                    <Nav.Link>
                      Products</Nav.Link>
                    </LinkContainer> */}

                    {/* <LinkContainer to ="#">
                    <Nav.Link>
                      Contact us</Nav.Link>
                    </LinkContainer> */}

                </Nav>


                <Nav className="custom-nav ml-auto">
                    <LinkContainer to ="/cart">
                  <Nav.Link><i className="fas fa-shopping-cart"></i>
                    Cart
                    </Nav.Link>
                  </LinkContainer>

                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : <LinkContainer to ="/login">
                    <Nav.Link><i className="fas fa-user"></i>
                    Login
                    </Nav.Link>
                  </LinkContainer> }
                
              </Nav>
            
                
              {/* </Nav>          */}
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      
    )
}

// using class component here not arrow func w variable