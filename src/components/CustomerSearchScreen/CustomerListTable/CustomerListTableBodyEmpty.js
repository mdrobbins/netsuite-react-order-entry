import React from 'react';
import PropTypes from 'prop-types';

const CustomerListTableBodyEmpty = (props) => {
  return (
    <tbody>
    <tr>
      <td colSpan="4">
        <div className="ml-auto mr-auto text-center" style={{width: 400}}>{props.message}</div>
      </td>
    </tr>
    </tbody>
  );
};

CustomerListTableBodyEmpty.defaultProps = {
  message: 'No records to show'
}

CustomerListTableBodyEmpty.propTypes = {
  message: PropTypes.string
};

export default CustomerListTableBodyEmpty;