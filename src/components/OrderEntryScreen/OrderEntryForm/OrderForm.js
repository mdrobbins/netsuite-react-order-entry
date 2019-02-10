import React from 'react';
import * as actions from '../../../actions/orderActions';
import { Form } from "react-bootstrap";
import { isEmpty } from "../../../api/common";

const OrderForm = ({ customer, order, dispatch }) => {
  const onShipToAddressChanged = e => dispatch(actions.shipToAddressChanged(e.target.value));
  const onPoNumberChanged = e => dispatch(actions.poNumberChanged(e.target.value));

  return (
    <>
      <Form.Group controlId="po-number" className="mt-1">
        <Form.Label>Customer PO#</Form.Label>
        <Form.Control value={order.poNumber}
                      onChange={onPoNumberChanged}/>
      </Form.Group>
      <Form.Group controlId="shipping-address" className="mt-1">
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control as="select"
                      value={order.shippingAddress}
                      onChange={onShipToAddressChanged}>
          {!isEmpty(customer) && customer.addresses.map(address => <option key={address.id}
                                                                           value={address.id}>{address.name}</option>)}
        </Form.Control>
      </Form.Group>
    </>);
};

export default OrderForm;