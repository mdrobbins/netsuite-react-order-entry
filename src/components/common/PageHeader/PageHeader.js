import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const PageHeader = () => {
  return (
    <NavBar bg="dark"
            variant="dark">
      <NavBar.Brand href="/">DataTek Software - Order Entry</NavBar.Brand>
      <Nav className="ml-auto">
        <Nav.Link><Link to="/" className="text-light">Customers</Link></Nav.Link>
        <Nav.Link><Link to="/orders" className="text-light">Orders</Link></Nav.Link>
        <Nav.Link><Link to="/about" className="text-light">About</Link></Nav.Link>
      </Nav>
    </NavBar>
  );
};

export default PageHeader;
