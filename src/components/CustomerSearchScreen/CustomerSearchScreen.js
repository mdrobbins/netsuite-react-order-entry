import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Tabs, Tab } from 'react-bootstrap';
import CustomerListTable from './CustomerListTable/CustomerListTable';

const CustomerSearchScreen = props => {
  const searchResults = props.customer.customerSearchResults;
  return (
    <Container>
      <Row>
        <Col>
          <Form className="mt-4">
              <Row>
                <Col md={{ offset: 2, span: 8}}>
                  <Form.Group controlId="customer-search">
                    <Form.Label><h4>Customer Search</h4></Form.Label>
                    <Form.Control/>
                  </Form.Group>
                </Col>
              </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="recent" className="mt-5">
            <Tab eventKey="recent" title="Recent Customers">
              <CustomerListTable customers={searchResults}
                                 emptyMessage="No records found"/>
            </Tab>
            <Tab eventKey="results" title="Search Results">
              <CustomerListTable customers={[]}
                                 message='No Search Results - Enter search criteria above'/>
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
