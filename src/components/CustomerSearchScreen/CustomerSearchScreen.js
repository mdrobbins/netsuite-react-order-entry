import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Tabs, Tab } from 'react-bootstrap';
import CustomerListTable from './CustomerListTable/CustomerListTable';
import Button from "react-bootstrap/Button";

const CustomerSearchScreen = props => {
  const searchResults = props.customer.customerSearchResults;
  return (
    <Container>
      <Row>
        <Col>
          <Form className="mt-4">
              <Row>
                <Col md={{ offset: 2, span: 7}}>
                  <Form.Group controlId="customer-search" className="mt-1">
                    <Form.Label><h4>Customer Search</h4></Form.Label>
                    <Form.Control/>
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="primary" className="mt-5">Search</Button>
                </Col>
              </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="results" className="mt-5">
            <Tab eventKey="results" title="Search Results">
              <CustomerListTable customers={[]}
                                 message='No Search Results'/>
            </Tab>
            <Tab eventKey="recent" title="Recent Customers">
              <CustomerListTable customers={searchResults}
                                 emptyMessage="No records found"/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  customer: state.customer
});

export default connect(mapStateToProps)(CustomerSearchScreen);
