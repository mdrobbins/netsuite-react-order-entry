import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import * as actions from '../../../actions/orderActions';
import { formatUSD } from "../../../api/common";

const ItemSearchForm = ({ item, ...props }) => {
  const onSearchTextChanged = e => {
    props.dispatch(actions.searchTextChanged(e.target.value))
  };

  const onItemQuantityChanged = (e) => {
    const itemId = Number(e.target.id);
    const quantity = Number(e.target.value);
    props.dispatch(actions.itemQuantityChanged(itemId, quantity));
  };

  const onItemSearchClick = () => {
    props.dispatch(actions.searchItems(item.searchText.trim()));
  };

  const onSearchFormSubmit = (e) => {
    e.preventDefault();
    props.dispatch(actions.searchItems(item.searchText.trim()));
  };

  const onAddItemClick = (itemId) => {
    itemId = Number(itemId);
    props.dispatch(actions.addItemToOrder(itemId));
  };

  return (
    <>
      <Row>
        <Col md="5">
          <Form onSubmit={onSearchFormSubmit}>
            <Form.Group controlId="item-search">
              <Form.Label>Item Search</Form.Label>
              <Form.Control value={item.searchText} onChange={onSearchTextChanged}/>
            </Form.Group>
          </Form>
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
          {item.itemSearchResults.map(item => {
            const itemName = item.number.split(' : ').pop();
            return <tr key={item.id}>
              <td><img src={item.imageUrl} height="40" width="40" alt=""/></td>
              <td>{itemName}</td>
              <td>{item.description}</td>
              <td align="center">{item.quantityAvailable}</td>
              <td align="right">{formatUSD(item.rate)}</td>
              <td align="center">
                <Form.Control style={{ width: 80 }}
                              id={item.id}
                              value={item.quantity}
                              onChange={onItemQuantityChanged}/>
              </td>
              <td>
                <Button variant="outline-secondary"
                        disabled={item.quantity <= 0}
                        onClick={() => onAddItemClick(item.id)}>
                  Add
                </Button>
              </td>
            </tr>
          })}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default connect()(ItemSearchForm);