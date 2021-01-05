import React, { Component } from 'react'
import { useDispatch, useSelector } from "react-redux"
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
          <Container 
            style={
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            }>
            <Row>
              <Col><Image src="../public/images/logos/logo-desktop.png" className="custom-logo" /></Col>
            </Row>
          </Container> 
          
          
          <Navbar variant="dark" expand="lg" collapseOnSelect className='custom-navbar'>
          <Container>
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="custom-nav ml-auto">
                    <LinkContainer to ="/">
                      <Nav.Link>
                        Home
                      </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to ="/about">
                      <Nav.Link>
                        About
                      </Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Products" id="basic-nav-dropdown">

                      <NavDropdown.Item>
                        <LinkContainer to ="/AllProducts">
                          <Nav.Link>
                            All Products
                          </Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <LinkContainer to ="/Jackets">
                          <Nav.Link>
                            Jackets
                          </Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <LinkContainer to ="/Jeans">
                          <Nav.Link>
                            Jeans
                          </Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <LinkContainer to ="/Gloves">
                          <Nav.Link>
                            Gloves
                          </Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <LinkContainer to ="/StickersandPatches">
                          <Nav.Link>
                            Stickers and Patches
                          </Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                    
                    </NavDropdown>

                    <LinkContainer to ="/Contact">
                      <Nav.Link>
                        Contact us
                      </Nav.Link>
                    </LinkContainer>

              {/* </Nav>


                <Nav className="custom-nav ml-auto"> */}
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
              
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      
    )
}

export default Header
