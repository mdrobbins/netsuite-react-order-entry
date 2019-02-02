import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const PageHeader = () => {
  return (
    <NavBar bg="dark"
            variant="dark">
      <NavBar.Brand href="/">DataTek Software - Order Entry</NavBar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href='/'>Customers</Nav.Link>
        <Nav.Link href='/orders'>Orders</Nav.Link>
        <Nav.Link href='/about'>About</Nav.Link>
      </Nav>
    </NavBar>
  );
};

export default PageHeader;
