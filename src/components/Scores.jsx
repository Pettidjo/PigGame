import React, { Component } from 'react';

class Scores extends Component {
    render() {
        return (
            <div className="row">
                <p>{this.props.currentScore}</p>
                <p>{this.props.finalScore}</p>                
            </div>
        );
    }
}

export default Scores;