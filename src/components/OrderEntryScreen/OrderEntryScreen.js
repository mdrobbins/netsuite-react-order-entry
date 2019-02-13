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

  saveButtonDisabled = () => {
    const order = this.props.order;
    return !order.poNumber || order.items.length === 0;
  };

  render() {
    return (
      <Container>
        <Row className="mt-2">
          <Col md="12">
            <h2>New Order: {this.props.customer.number} - {this.props.customer.companyName}</h2>
          </Col>
        </Row>
        <Row>
          <Button className="mt-4 ml-3" disabled={this.saveButtonDisabled()}>Save Order</Button>
        </Row>
        <Form className="mt-3">
          <Row>
            <Col md="5">
              <OrderForm customer={this.props.customer}
                         order={this.props.order}
                         dispatch={this.props.dispatch}/>
            </Col>
            <Col md="7">
              <OrderItemList items={this.props.order.items}/>
            </Col>
          </Row>
        </Form>
        <hr/>
        <ItemSearchForm item={this.props.item}/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer,
  order: state.order,
  item: state.item
});

export default connect(mapStateToProps)(OrderEntryScreen);