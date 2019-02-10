import React from 'react';
import NavBar from 'react-bootstrap/Navbar';

const PageHeader = () => {
  return (
    <NavBar bg="dark"
            variant="dark">
      <NavBar.Brand href="/">DataTek Software - Order Entry</NavBar.Brand>
    </NavBar>
  );
};

export default PageHeader;
