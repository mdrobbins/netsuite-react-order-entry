import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from "react-bootstrap";
import * as actions from '../../actions/customerActions';
import { isEmpty } from "../../api/common";
import CustomerEntryForm from "./CustomerEntryForm";
import CustomerEntryOrderTable from "./CustomerEntryOrderTable";

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
        <Row>
          <Button className="mt-4 ml-3">Save</Button>
          <Button className="mt-4 ml-2" variant="secondary">New Order</Button>
          <Button className="mt-4 ml-2" variant="secondary">Open In NetSuite</Button>
        </Row>
        <CustomerEntryForm customer={this.props.customer}/>
        <CustomerEntryOrderTable orders={this.props.customer.orders}/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer
});

export default connect(mapStateToProps)(CustomerEntryScreen);