import React, { Component } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
          <Row>
            <Col><Image src="logo-desktop.png" className="custom-logo" /></Col>
          </Row>

      </Container> 
        
        
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
<<<<<<< HEAD
            
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
            
            
=======
              <LinkContainer to ="/">
              <Nav.Link>
                Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to ="/about">
              <Nav.Link>
                About</Nav.Link>
              </LinkContainer>
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
          
>>>>>>> b2adb8d0caf604b630e9b69c258c42faf2d21cd3
              
            {/* </Nav>          */}
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    
  )
}

export default Header


