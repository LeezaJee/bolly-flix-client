import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">Bolly Flix Movies</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Profile</Nav.Link>
              <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


