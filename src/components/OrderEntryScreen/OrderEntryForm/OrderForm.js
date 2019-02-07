import React from 'react';
import { Form } from "react-bootstrap";

const OrderForm = () => {
  return (
    <>
      <Form.Group controlId="po-number" className="mt-1">
        <Form.Label>Customer PO#</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group controlId="shipping-address" className="mt-1">
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control as="select">
          <option>10601 Gandy Blvd N #2402</option>
          <option>11936 Tivoli Park Row #1</option>
        </Form.Control>
      </Form.Group>
    </>);
};

export default OrderForm;