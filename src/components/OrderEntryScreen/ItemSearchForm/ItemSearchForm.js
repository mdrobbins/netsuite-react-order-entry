import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import * as actions from '../../../actions/orderActions';
import { formatUSD } from "../../../api/common";

const ItemSearchForm = ({ item, ...props }) => {
  const onSearchTextChanged = e => {
    props.dispatch(actions.searchTextChanged(e.target.value))
  };

  const onItemSearchClick = () => {
    props.dispatch(actions.searchItems(item.searchText.trim()));
  };

  return (
    <>
      <Row>
        <Col md="5">
          <Form.Group controlId="item-search">
            <Form.Label>Item Search</Form.Label>
            <Form.Control value={item.searchText} onChange={onSearchTextChanged}/>
          </Form.Group>
        </Col>
        <Col md="1">
          <Button style={{ marginTop: 32 }} variant="outline-secondary" onClick={onItemSearchClick}>Search</Button>
        </Col>
      </Row>
      <Row>
        <Table striped hover>
          <thead>
          <tr>
            <th/>
            <th>Item</th>
            <th>Description</th>
            <th style={{ textAlign: 'center' }}>Avail</th>
            <th style={{ textAlign: 'right' }}>Rate</th>
            <th style={{ textAlign: 'center' }}>Qty</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {item.itemSearchResults.map(item => (
            <tr>
              <td><img src={item.imageUrl} height="40" width="40" alt={item.number}/></td>
              <td>{item.number.split(' : ').pop()}</td>
              <td>{item.description}</td>
              <td align="center">{item.quantityAvailable}</td>
              <td align="right">{formatUSD(item.rate)}</td>
              <td align="center"><Form.Control style={{ width: 80 }}/></td>
              <td><Button variant="outline-secondary">Add</Button></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default connect()(ItemSearchForm);