import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import logo from '../assets/images/logo.jpg'

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link to='/'>
          {/* Use Link component instead of Navbar.Brand href */}
          <Navbar.Brand>
            <img
              src={logo}
              alt=''
              style={{
                width: '100px',
                height: '80px',
                marginLeft: '10px',
              }}
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            {/* Use Link component for navigation */}
            <Nav.Link as={Link} to='/menu'>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
