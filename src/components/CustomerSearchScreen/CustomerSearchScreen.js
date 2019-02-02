import React from 'react';
import { Container, Row, Col, Form, Tabs, Tab, Table } from 'react-bootstrap';

const CustomerSearchScreen = () => {
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
              <Table striped bordered hover className="mt-2">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>CUS00000368</td>
                  <td>Ridgeway Hospital Networking</td>
                  <td>GVandever@thinkebiz.com</td>
                  <td>(405) 518-0804</td>
                </tr>
                <tr>
                  <td>CUS00000469</td>
                  <td>DataTek Software</td>
                  <td>mdrobbins@datateksoftware.com</td>
                  <td>(858) 774-2746</td>
                </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="results" title="Search Results">
              <Table striped bordered hover className="mt-2">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colSpan="4"><div className="ml-auto mr-auto" style={{width: 400}}>No Search Results - Please enter search criteria above</div></td>
                </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerSearchScreen;