import React from 'react';
import { Button, Col, Form, Row, Table } from "react-bootstrap";

const ItemSearchForm = () => {
  const imageUrl = '/images/bowcaster.png';
  return (
    <>
      <Row>
        <Col md="5">
          <Form.Group controlId="item-search">
            <Form.Label>Item Search</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
        <Col md="1">
          <Button style={{ marginTop: 32 }} variant="outline-secondary">Search</Button>
        </Col>
      </Row>
      <Row>
        <Table striped hover>
          <thead>
          <tr>
            <th/>
            <th>Item</th>
            <th>Description</th>
            <th>Avail</th>
            <th>Rate</th>
            <th>Qty</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><img src={imageUrl} height="40" width="40" alt="product"/></td>
            <td>ITM00001</td>
            <td>This is the description of the item</td>
            <td>100</td>
            <td>100.00</td>
            <td><Form.Control style={{ width: 80 }}/></td>
            <td><Button variant="outline-secondary">Add</Button></td>
          </tr>
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ItemSearchForm;