import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Tabs, Tab } from 'react-bootstrap';
import CustomerListTable from './CustomerListTable/CustomerListTable';
import Button from "react-bootstrap/Button";
import * as actions from '../../actions/customerActions';

class CustomerSearchScreen extends Component {
  componentDidMount = () => {
    this.searchField.focus();
  };

  componentDidUpdate = () => {
    this.searchField.focus();
  };

  render() {
    const onSearchTextChange = e => this.props.dispatch(actions.searchTextChanged(e.target.value));

    const onSubmitForm = e => {
      e.preventDefault();
      this.props.dispatch(actions.searchCustomers(this.props.customer.searchText));
    };

    const onTabSelect = key => this.props.dispatch(actions.searchTabChanged(key));

    return (
      <Container>
        <Row>
          <Col>
            <Form className="mt-4" onSubmit={onSubmitForm}>
              <Row>
                <Col md={{ offset: 2, span: 7 }}>
                  <Form.Group controlId="customer-search" className="mt-1">
                    <Form.Label><h4>Customer Search</h4></Form.Label>
                    <Form.Control value={this.props.customer.searchText}
                                  onChange={onSearchTextChange}
                                  ref={input => this.searchField = input}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="primary" className="mt-5" onClick={onSubmitForm}>Search</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs className="mt-5"
                  activeKey={this.props.customer.activeTab}
                  onSelect={key => onTabSelect(key)}>
              <Tab eventKey="results"
                   title="Search Results">
                <CustomerListTable customers={this.props.customer.customerSearchResults}
                                   message='No Search Results'/>
              </Tab>
              <Tab eventKey="recent"
                   title="Recent Customers">
                <CustomerListTable customers={this.props.customer.recentCustomers}
                                   emptyMessage="No records found"/>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer
});

export default connect(mapStateToProps)(CustomerSearchScreen);
