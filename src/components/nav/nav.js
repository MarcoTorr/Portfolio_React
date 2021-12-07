import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

function Navigationbar() {
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">MARCO TORRES</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/">About me</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

  export default Navigationbar;
