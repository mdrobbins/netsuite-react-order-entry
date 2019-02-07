import React from 'react';
import { Form, Table } from "react-bootstrap";

const OrderItemList = () => {
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
        <tr>
          <td>ITM000001</td>
          <td align="center">10</td>
          <td align="right">100.00</td>
          <td align="right">1,000.00</td>
        </tr>
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default OrderItemList;