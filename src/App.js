import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import CustomerSearchScreen from './components/CustomerSearchScreen/CustomerSearchScreen'
import PageHeader from "./components/common/PageHeader/PageHeader";
import CustomerEntryScreen from "./components/CustomerEntryScreen/CustomerEntryScreen";
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <Router>
          <div id="content">
            <Switch>
              <Route exact path="/" component={CustomerSearchScreen}/>
              <Route path="/customer/:id" component={CustomerEntryScreen}/>
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
