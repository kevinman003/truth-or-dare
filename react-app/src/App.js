import React, { Component } from 'react';
import axios from 'axios';

import Main from './components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Main />
      </div>
    );
  }
}

export default App;
