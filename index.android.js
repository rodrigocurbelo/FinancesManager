import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  View,
} from 'react-native';

import Login from './src/components/Login';

export default class FinancesManager extends Component {
  render() {
    return (
      <Router>
        <Scene key="login" component={Login} title="Login" initial={true} hideNavBar={true} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('FinancesManager', () => FinancesManager);
