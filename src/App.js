import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store }  from './reducer/store'

import './App.css';
import RouteConfig from './router/index.js'


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RouteConfig/>
      </Provider>
    );
  }
}

export default App;
