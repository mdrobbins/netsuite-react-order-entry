import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const CustomerSearchScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="mt-2">
            <Form.Group controlId="customer-search">
              <Form.Label>Customer Search</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerSearchScreen;