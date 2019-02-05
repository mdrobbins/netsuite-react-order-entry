import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form } from "react-bootstrap";
import * as actions from '../../actions/customerActions';
import { isEmpty } from "../../api/common";

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
            { !isEmpty(this.props.customer) && <h2>{this.props.customer.number} - {this.props.customer.companyName}</h2> }
          </Col>
        </Row>
        <Form className="mt-3">
          <Row>
            <Col md="6">
              <Form.Group controlId="company-name" className="mt-1">
                <Form.Label>Company Name</Form.Label>
                <Form.Control value={this.props.customer.companyName}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Form.Group controlId="email" className="mt-1">
                <Form.Label>Email</Form.Label>
                <Form.Control value={this.props.customer.email}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Form.Group controlId="phone" className="mt-1">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={this.props.customer.phone}/>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer
});

export default connect(mapStateToProps)(CustomerEntryScreen);