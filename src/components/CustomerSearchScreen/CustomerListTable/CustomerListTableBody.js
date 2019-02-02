import React from 'react';
import PropTypes from 'prop-types';

const CustomerListTableBody = props => {
  return (
    <tbody>
    {props.customers.map(customer =>
      <tr key={customer.id}>
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

export default CustomerListTableBody;