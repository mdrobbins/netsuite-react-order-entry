import React from 'react';
import PropTypes from 'prop-types';
import { Table } from "react-bootstrap";
import CustomerListTableBody from "./CustomerListTableBody";
import CustomerListTableBodyEmpty from "./CustomerListTableBodyEmpty";
import Button from "react-bootstrap/Button";

const CustomerListTable = props => {
  return (
    <Table striped bordered hover className="mt-2">
      <thead>
      <tr>
        <th>{props.showClearButton && <Button size="sm" color="error" onClick={props.onClearClick}>Clear</Button>}</th>
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
  showClearButton: false,
  onClearClick: f => f
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
  message: PropTypes.string,
  showClearButton: PropTypes.bool,
  onClearClick: PropTypes.func
};

export default CustomerListTable;