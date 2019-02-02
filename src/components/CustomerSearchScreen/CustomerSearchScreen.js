import React from 'react';

const CustomerSearchScreen = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="form-group col-12 mt-2">
            <label htmlFor="customer-search">Customer search</label>
            <input type="text"
                   id="cutomer-search"
                   name="customer-search"
                   className="form-control"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSearchScreen;