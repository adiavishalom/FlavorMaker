import React, { Component } from 'react';
import FlavorContainer from './containers/FlavorContainer';
import './stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <FlavorContainer/>
      </div>
    );
  }
}

export default App;