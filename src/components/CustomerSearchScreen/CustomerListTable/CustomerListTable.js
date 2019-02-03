import React from 'react';
import PropTypes from 'prop-types';
import { Table } from "react-bootstrap";
import CustomerListTableBody from "./CustomerListTableBody";
import CustomerListTableBodyEmpty from "./CustomerListTableBodyEmpty";

const CustomerListTable = props => {
  return (
    <Table striped bordered hover className="mt-2">
      <thead>
      <tr>
        <th/>
        <th>#</th>
        <th>Company Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      </thead>
      { props.customers.length > 0
        ? <CustomerListTableBody customers={props.customers}/>
        : <CustomerListTableBodyEmpty message={props.message}/>}
    </Table>
  );
};

CustomerListTable.defaultProps = {
  customers: [],
  message: 'No Records Found',
};

CustomerListTable.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  ),
  message: PropTypes.string
};

export default CustomerListTable;