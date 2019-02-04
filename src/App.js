import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CustomerSearchScreen from './components/CustomerSearchScreen/CustomerSearchScreen'
import PageHeader from "./components/common/PageHeader/PageHeader";
import CustomerEntryScreen from "./components/CustomerEntryScreen/CustomerEntryScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <div id="content">
          {this.props.showCustomerSearchScreen && <CustomerSearchScreen/>}
          {this.props.showCustomerEntryScreen && <CustomerEntryScreen/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCustomerSearchScreen: state.navigation.showCustomerSearchScreen,
  showCustomerEntryScreen: state.navigation.showCustomerEntryScreen
});

export default connect(mapStateToProps)(App);
