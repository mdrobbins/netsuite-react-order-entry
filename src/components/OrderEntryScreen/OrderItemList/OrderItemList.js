import React from 'react';
import { Form, Table } from "react-bootstrap";
import { formatUSD } from "../../../api/common";

const OrderItemList = ({ items }) => {
  return (
    <Form.Group controlId="comments" className="mt-1">
      <Form.Label>Order Items</Form.Label>
      <Table size="sm" hover>
        <thead>
        <tr>
          <th>Item</th>
          <th style={{ textAlign: 'center' }}>Qty</th>
          <th style={{ textAlign: 'right' }}>Rate</th>
          <th style={{ textAlign: 'right' }}>Amount</th>
        </tr>
        </thead>
        <tbody>
        {items.map(item => (
          <tr>
            <td>{item.number}</td>
            <td align="center">{item.quantity}</td>
            <td align="right">{formatUSD(item.rate)}</td>
            <td align="right">{formatUSD(item.rate * item.quantity)}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default OrderItemList;