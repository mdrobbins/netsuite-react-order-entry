import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  onNewOrderClick = () => {
    this.props.history.push('/order/new');
  };

  onSaveClick = () => {
    const customerInfo = {
      customerId: this.props.customer.id,
      companyName: this.props.customer.companyName,
      email: this.props.customer.email,
      phone: this.props.customer.phone,
      comments: this.props.customer.comments
    };
    this.props.dispatch(actions.saveCustomer(customerInfo));
  };

  render() {
    const customerUrl = `/app/common/entity/custjob.nl?id=${this.props.customer.id}`;

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
          <Button className="mt-4 ml-3" onClick={this.onSaveClick}>Save</Button>
          <Button className="mt-4 ml-2" variant="secondary" onClick={this.onNewOrderClick}>New Order</Button>
          <a href={customerUrl} target="_blank" rel="noopener noreferrer"><Button className="mt-4 ml-2"
                                                                                  variant="secondary">Open In
            NetSuite</Button></a>
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

export default connect(mapStateToProps)(withRouter(CustomerEntryScreen));