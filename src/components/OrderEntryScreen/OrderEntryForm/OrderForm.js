import React from 'react';
import { Form } from "react-bootstrap";
import { isEmpty } from "../../../api/common";

const OrderForm = ({ customer }) => {
  console.log(customer);
  return (
    <>
      <Form.Group controlId="po-number" className="mt-1">
        <Form.Label>Customer PO#</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group controlId="shipping-address" className="mt-1">
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control as="select">
          {!isEmpty(customer) && customer.addresses.map(address => <option key={address.id}
                                                                           value={address.id}>{address.name}</option>)}
        </Form.Control>
      </Form.Group>
    </>);
};

export default OrderForm;