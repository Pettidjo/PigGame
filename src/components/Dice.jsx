import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
                {this.props.val}
            </div>
        );
    }
}

export default Dice;