import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/customerActions';
import { Row, Col, Form } from 'react-bootstrap';
import { formatUSD } from '../../api/common';

const CustomerEntryForm = (props) => {
  const onCompanyNameChange = e => {
    props.dispatch(actions.companyNameChanged(e.target.value));
  };

  const onEmailChanged = e => {
    props.dispatch(actions.emailChanged(e.target.value));
  };

  const onPhoneChanged = e => {
    props.dispatch(actions.phoneChanged(e.target.value));
  };

  const onCommentsChanged = e => {
    props.dispatch(actions.commentsChanged(e.target.value));
  };

  return (
    <Form className="mt-3">
      <Row>
        <Col md="6">
          <Form.Group controlId="company-name" className="mt-1">
            <Form.Label>Company Name</Form.Label>
            <Form.Control value={props.customer.companyName} onChange={onCompanyNameChange}/>
          </Form.Group>
          <Form.Group controlId="email" className="mt-1">
            <Form.Label>Email</Form.Label>
            <Form.Control value={props.customer.email} onChange={onEmailChanged}/>
          </Form.Group>
          <Form.Group controlId="phone" className="mt-1">
            <Form.Label>Phone</Form.Label>
            <Form.Control value={props.customer.phone} onChange={onPhoneChanged}/>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group controlId="comments" className="mt-1">
            <Form.Label>Comments</Form.Label>
            <Form.Control value={props.customer.comments} as="textarea" rows="4" onChange={onCommentsChanged}/>
          </Form.Group>
          <Row>
            <Col md={{ offset: 1, span: 5 }}>
              <Form.Group controlId="balance" className="mt-3">
                <Form.Label>Balance</Form.Label>
                <h3>{formatUSD(props.customer.balance)}</h3>
              </Form.Group>
            </Col>
            <Col md={{ offset: 1, span: 5 }}>
              <Form.Group controlId="daysoverdue" className="mt-3">
                <Form.Label>Days Overdue</Form.Label>
                <h3>{props.customer.daysOverdue}</h3>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

CustomerEntryForm.propTypes = {
  customer: PropTypes.object.isRequired
};

export default connect()(CustomerEntryForm);