import React, { Component } from 'react'
import {Container, Row, Col } from "react-bootstrap"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Alison Killen and Sevda Amini 2020
            </Col>
          </Row>
        </Container>
      </footer>
      
    )
  }
}

// using class component here not arrow func w variable