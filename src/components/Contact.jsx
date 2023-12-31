import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <Container className='py-5'>
      <h2 className='text-center mb-4'>Contact Us</h2>

      <Form>
        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formFullName'>
              <Form.Control type='text' placeholder='Enter your full name' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formPhoneNumber'>
              <Form.Control type='tel' placeholder='Enter your phone number' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formAddress'>
              <Form.Control type='text' placeholder='Enter your address' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formEmail'>
              <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formDescription'>
              <Form.Control
                as='textarea'
                rows={4}
                placeholder='Enter your message'
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant='success' type='submit' className='float-end'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
