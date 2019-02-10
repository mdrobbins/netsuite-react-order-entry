import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = (props) => {
  return (
    <div>
      {props.isLoading && <div className='loader_container'>
        <div className='loader'/>
        <div className='loader2'/>
        <div className='loader_text'>{props.loadingText}</div>
      </div>}
    </div>
  )

};

Spinner.defaultProps = {
  isLoading: false,
  loadingText: 'processing'
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
};

export default Spinner;
