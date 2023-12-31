import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link to='/'>
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
          <Nav className='ms-auto'>
            <Nav.Link
              as={Link}
              to='/'
              style={{ fontSize: '18px', margin: '0 15px', fontWeight: 'bold' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/menu'
              style={{ fontSize: '18px', margin: '0 15px', fontWeight: 'bold' }}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              style={{ fontSize: '18px', margin: '0 15px', fontWeight: 'bold' }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              style={{ fontSize: '18px', margin: '0 15px', fontWeight: 'bold' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
