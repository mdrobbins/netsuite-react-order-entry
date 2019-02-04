import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import * as actions from '../../../actions/customerActions';

const CustomerListTableBody = props => {
  const onEditButtonClicked = (customerId) => {
    props.dispatch(actions.editButtonClicked(customerId, props.customers));
  };

  return (
    <tbody>
    {props.customers.map(customer =>
      <tr key={customer.id}>
        <td>
          <Button size="sm"
                  variant="outline-secondary"
                  onClick={() => onEditButtonClicked(customer.id)}>
            Edit
          </Button>
        </td>
        <td>{customer.number}</td>
        <td>{customer.companyName}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
      </tr>
    )}
    </tbody>
  );
};

CustomerListTableBody.defaultProps = {
  customers: []
};

CustomerListTableBody.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  )
};

export default connect()(CustomerListTableBody);