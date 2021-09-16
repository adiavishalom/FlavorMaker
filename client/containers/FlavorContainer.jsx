import React, { Component } from 'react';
import FlavorBox from './FlavorBox';

class FlavorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavorObj: {0:' ', 1:' ', 2:' '}
    }
  }

  randomFlavors(amount) {
    fetch('/flavors/')
      .then(res => res.json())
      .then((flavors) => {
        if (!Array.isArray(flavors)) flavors = [];
        const arr = [];
        let returnObj = [];
        const cb = document.getElementById('mintCheck');
        if(cb.checked) {
          arr.push(0)
          returnObj[0] = flavors[0].name.charAt(0).toUpperCase() + flavors[0].name.slice(1);;
        };
        while (arr.length < 3) {
          var num = Math.floor(Math.random() * flavors.length);
          if (arr.indexOf(num) === -1) {
            arr.push(num)
            returnObj[arr.indexOf(num)] = flavors[num].name.charAt(0).toUpperCase() + flavors[num].name.slice(1);
          };
        }
        this.setState({
          flavorObj: {...returnObj}
        });
      })
      .catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
    return;
  };

  render() {
    const flavorBoxes = [];
    
    // loop, make 3 boxes by repeating a loop
    for (let i = 0; i < 3; i++){
      flavorBoxes.push(<FlavorBox flavor = {this.state.flavorObj[i]}/>)
    }
    return(
      <div className="mainContainer">
        <div className="flavorContainer">
          <div className="outerBox">
            {flavorBoxes}
          </div>
          <button className="gradient-button gradient-button-1" onClick={() => {this.randomFlavors(3)}}>Lets Get A Mix!</button>
        </div>
        <input type="checkbox" id="mintCheck" name="mintCheck" value="mint"></input>
        <label for="mintCheck"> Always Include Mint</label><br></br>
      </div>
    );
  }

}

export default FlavorContainer;