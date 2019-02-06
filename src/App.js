import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import CustomerSearchScreen from './components/CustomerSearchScreen/CustomerSearchScreen'
import PageHeader from "./components/common/PageHeader/PageHeader";
import CustomerEntryScreen from "./components/CustomerEntryScreen/CustomerEntryScreen";
import NotFound from './components/NotFound/NotFound';
import OrderEntryScreen from "./components/OrderEntryScreen/OrderEntryScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="content">
            <PageHeader/>
            <Switch>
              <Route exact path="/" component={CustomerSearchScreen}/>
              <Route path="/customer/:id" component={CustomerEntryScreen}/>
              <Route path="/order/:id" component={OrderEntryScreen}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCustomerSearchScreen: state.navigation.showCustomerSearchScreen,
  showCustomerEntryScreen: state.navigation.showCustomerEntryScreen
});

export default connect(mapStateToProps)(App);
