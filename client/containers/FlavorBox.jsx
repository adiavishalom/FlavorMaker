import React, { Component } from 'react';

class FlavorBox extends Component {
    constructor(props) {
    super(props);
    this.state = {
    };
    };
    render() {
    return (
        <div className="flavorBox">
            {this.props.flavor}
        </div>
    );
    }
}

export default FlavorBox;