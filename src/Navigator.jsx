import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Navigator() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/home" className={({isActive})=>isActive?"hello":null}>Home</NavLink>
        <NavLink to="/favorite"  className={({isActive})=>isActive?"hello":null}>favorite</NavLink>
       
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigator