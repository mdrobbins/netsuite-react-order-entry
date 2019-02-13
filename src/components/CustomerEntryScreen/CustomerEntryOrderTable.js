import React from 'react';
import PropTypes from 'prop-types';
import { Row, Table } from "react-bootstrap";
import { formatUSD } from "../../api/common";

const CustomerEntryOrderTable = ({ orders }) => {
  return (
    <Row>
      <h5 className="mt-5">Order History</h5>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th/>
          <th>Order #</th>
          <th>Order Date</th>
          <th>Status</th>
          <th style={{ textAlign: 'right' }}>Total</th>
        </tr>
        </thead>
        <tbody>
        {orders && orders.map(order => {
          const orderLink = `/app/accounting/transactions/salesord.nl?id=${order.id}&whence=`;
            return <tr key={order.id}>
              <td align="center">
                <a href={orderLink} target='_blank' rel='noopener noreferrer'>
                  View
                </a>
              </td>
              <td>{order.number}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td align="right">{formatUSD(order.total)}</td>
            </tr>
          }
        )}
        </tbody>
      </Table>
    </Row>
  );
};

CustomerEntryOrderTable.PropTypes = {
  orders: PropTypes.array.isRequired
};

export default CustomerEntryOrderTable;