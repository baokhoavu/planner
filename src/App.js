// Imports
import React, { Component } from 'react';
import Header from './components/header';

// Class Component
export default class App extends Component {

  constructor(props) {
      super(props);

      // Variables
      this.state = {
        header: "App-header"
      }      

  }

  render() {

    return (
      <div className="App">
        <Header className={this.state.header} />
      </div>

    )

  }

}