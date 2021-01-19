import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  NavDropdown,
} from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col>
            <Image
              src='/images/Logos/logo-desktop.png'
              className='custom-logo'
            />
          </Col>
        </Row>
      </div>

      <Navbar
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='custom-navbar'
      >
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='custom-nav ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <NavDropdown title='Products' id='basic-nav-dropdown'>
                <NavDropdown.Item id='basic-nav-dropdown'>
                  <LinkContainer to='/AllProducts'>
                    <Nav.Link>All Products</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item id='basic-nav-dropdown'>
                  <LinkContainer to='/Jacket'>
                    <Nav.Link>Jackets</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item id='basic-nav-dropdown'>
                  <LinkContainer to='/Pants'>
                    <Nav.Link>Pants</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item id='basic-nav-dropdown'>
                  <LinkContainer to='/Gloves'>
                    <Nav.Link>Gloves</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item id='basic-nav-dropdown'>
                  <LinkContainer to='/StickersandPatches'>
                    <Nav.Link>Stickers and Patches</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className='custom-nav ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>
                    Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
