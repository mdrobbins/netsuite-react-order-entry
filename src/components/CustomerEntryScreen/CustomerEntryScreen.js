import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import * as actions from '../../actions/customerActions';

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
          <Col>
            <h2>{this.props.customer.companyName}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.currentCustomer
});

export default connect(mapStateToProps)(CustomerEntryScreen);