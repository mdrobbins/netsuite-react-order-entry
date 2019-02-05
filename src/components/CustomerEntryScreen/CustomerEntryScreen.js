import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from "react-bootstrap";
import * as actions from '../../actions/customerActions';
import { isEmpty, formatUSD } from "../../api/common";
import CustomerEntryForm from "./CustomerEntryForm";
import { Link } from "react-router-dom";

class CustomerEntryScreen extends Component {
  // noinspection JSUnusedGlobalSymbols
  componentDidMount = () => {
    const { params } = this.props.match;
    this.props.dispatch(actions.getCustomer(params.id));
  };

  render() {
    return (
      <Container>
        <Row className="mt-2">
          <Col md="12">
            {isEmpty(this.props.customer)
              ? <h2>Customer:</h2>
              : <h2>Customer: {this.props.customer.number} - {this.props.customer.companyName}</h2>}
          </Col>
        </Row>
        <CustomerEntryForm customer={this.props.customer}/>
        <Row>
          <h5 className="mt-5">Order History</h5>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th/>
              <th>Order #</th>
              <th>Order Date</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Total</th>
            </tr>
            </thead>
            <tbody>
            {this.props.customer.orders && this.props.customer.orders.map(order => {
                const orderLink = `/order/${order.id}`;
                return <tr key={order.id}>
                  <td align="center">
                    <Link to={orderLink}>
                      View
                    </Link>
                  </td>
                  <td>{order.number}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td align="right">{formatUSD(order.total)}</td>
                </tr>
              }
            )}
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

export default connect(mapStateToProps)(CustomerEntryScreen);