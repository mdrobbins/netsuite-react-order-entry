import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import CustomerSearchScreen from './components/CustomerSearchScreen/CustomerSearchScreen'
import PageHeader from "./components/common/PageHeader/PageHeader";
import CustomerEntryScreen from "./components/CustomerEntryScreen/CustomerEntryScreen";
import NotFound from './components/NotFound/NotFound';
import OrderEntryScreen from "./components/OrderEntryScreen/OrderEntryScreen";
import Spinner from './components/common/Spinner/Spinner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="content">
            <PageHeader/>
            <Switch>
              <Route exact path="/" component={CustomerSearchScreen}/>
              <Route path="/customer/:id(\d+)" component={CustomerEntryScreen}/>
              {/*<Route path="/order/:id(\d+)" component={OrderEntryScreen}/>*/}
              <Route path="/order/new" component={OrderEntryScreen}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
        <Spinner isLoading={this.props.callsInProgress > 0}
                 loadingText={this.props.loadingText}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCustomerSearchScreen: state.navigation.showCustomerSearchScreen,
  showCustomerEntryScreen: state.navigation.showCustomerEntryScreen,
  callsInProgress: state.ajax.callsInProgress,
  loadingText: state.ajax.loadingText
});

export default connect(mapStateToProps)(App);
