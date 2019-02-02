import React, { Component } from 'react';
import './App.css';
import CustomerSearchScreen from './components/CustomerSearchScreen/CustomerSearchScreen'
import PageHeader from "./components/common/PageHeader/PageHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <div id="content">
          <CustomerSearchScreen/>
        </div>
      </div>
    );
  }
}

export default App;
