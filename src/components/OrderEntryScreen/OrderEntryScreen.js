import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { isEmpty } from "../../api/common";

class OrderEntryScreen extends Component {
  constructor(props) {
    super(props);
    if (isEmpty(props.customer)) {
      props.history.push('/');
    }
  }

  render() {
    return (
      <Container>
        <Row className="mt-2">
          <Col md="12">
            <h2>New Order: {this.props.customer.number} - {this.props.customer.companyName}</h2>
          </Col>
        </Row>
        <Row>
          <Button className="mt-4 ml-3">Save</Button>
        </Row>
        <Form className="mt-3">
          <Row>
            <Col md="5">
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
            </Col>
            <Col md="7">
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
                  <tr>
                    <td>ITM000002</td>
                    <td align="center">20</td>
                    <td align="right">100.00</td>
                    <td align="right">2,000.00</td>
                  </tr>
                  <tr>
                    <td>ITM000003</td>
                    <td align="center">30</td>
                    <td align="right">100.00</td>
                    <td align="right">3,000.00</td>
                  </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <hr/>
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
              <td>
                <img src='/images/bowcaster.png' height="40" width="40"/>
              </td>
              <td>ITM00001</td>
              <td>This is the description of the item</td>
              <td>100</td>
              <td>100.00</td>
              <td>
                <Form.Control style={{ width: 80 }}/>
              </td>
              <td><Button variant="outline-secondary">Add</Button></td>
            </tr>
            <tr>
              <td>
                <img src='/images/bowcaster.png' height="40" width="40" alt="bowcaster"/>
              </td>
              <td>ITM00001</td>
              <td>This is the description of the item</td>
              <td>100</td>
              <td>100.00</td>
              <td>
                <Form.Control style={{ width: 80 }}/>
              </td>
              <td><Button variant="outline-secondary">Add</Button></td>
            </tr>
            <tr>
              <td>
                <img src='/images/bowcaster.png' height="40" width="40"/>
              </td>
              <td>ITM00001</td>
              <td>This is the description of the item</td>
              <td>100</td>
              <td>100.00</td>
              <td>
                <Form.Control style={{ width: 80 }}/>
              </td>
              <td><Button variant="outline-secondary">Add</Button></td>
            </tr>
            <tr>
              <td>
                <img src='/images/bowcaster.png' height="40" width="40"/>
              </td>
              <td>ITM00001</td>
              <td>This is the description of the item</td>
              <td>100</td>
              <td>100.00</td>
              <td>
                <Form.Control style={{ width: 80 }}/>
              </td>
              <td><Button variant="outline-secondary">Add</Button></td>
            </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer
});

export default connect(mapStateToProps)(OrderEntryScreen);