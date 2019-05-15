import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'react-bootstrap/Navbar';

const PageHeader = (props) => {
  return (
    <NavBar bg="dark"
            variant="dark">
      <NavBar.Brand href="#/">{props.companyName} - Order Entry</NavBar.Brand>
    </NavBar>
  );
};

PageHeader.propTypes = {
  companyName: PropTypes.string.isRequired
};

export default PageHeader;
