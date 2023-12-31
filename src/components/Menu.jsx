import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Import your dish images (replace these paths with your actual image paths)
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'

function Menu() {
  // Update the menuItems array with your dish information
  const menuItems = [
    {
      name: 'Dish 1',
      image: img1,
      price: '$10.99',
    },
    {
      name: 'Dish 2',
      image: img2,
      price: '$12.99',
    },
    {
      name: 'Dish 3',
      image: img3,
      price: '$8.99',
    },
    {
      name: 'Dish 4',
      image: img4,
      price: '$14.99',
    },
    {
      name: 'Dish 5',
      image: img5,
      price: '$9.99',
    },
    {
      name: 'Dish 6',
      image: img6,
      price: '$11.99',
    },
  ]

  return (
    <div className='py-5 bg-dark text-white'>
      <Container>
        <h2 className='text-center mb-4'>Our Offerings</h2>
        <Row>
          {menuItems.map((item, index) => (
            <Col key={index} md={4} className='mb-4'>
              <img src={item.image} alt={item.name} className='img-fluid' />
              <div className='mt-2'>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <Button variant='primary'>Order Now</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Menu
