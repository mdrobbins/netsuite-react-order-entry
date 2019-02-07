import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { isEmpty } from "../../api/common";
import OrderItemList from "./OrderItemList/OrderItemList";
import OrderForm from "./OrderEntryForm/OrderForm";
import ItemSearchForm from "./ItemSearchForm/ItemSearchForm";

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
          <Button className="mt-4 ml-3">Save Order</Button>
        </Row>
        <Form className="mt-3">
          <Row>
            <Col md="5">
              <OrderForm customer={this.props.customer}/>
            </Col>
            <Col md="7">
              <OrderItemList/>
            </Col>
          </Row>
        </Form>
        <hr/>
        <ItemSearchForm/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer
});

export default connect(mapStateToProps)(OrderEntryScreen);