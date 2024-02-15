import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar expand="lg" className="navbar" style={{width:"100%",position:'fixed',zIndex:5,top:'0px' }}>
      <Container>
        <Navbar.Brand style={{textDecoration:'none'}}><h4><i style={{height:'25px'}} className="fa-solid fa-graduation-cap fa-flip"></i>Education</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} style={{textDecoration:'none'}}  className='ms-3 text-dark'>Home</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header