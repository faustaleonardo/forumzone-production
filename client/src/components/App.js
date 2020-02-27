import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="container mt-2">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
