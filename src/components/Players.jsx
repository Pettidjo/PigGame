import React, { Component } from 'react';

// COMPONENTS
import Dice from './Dice';
import Scores from './Scores';

class Players extends Component {

    render() {
        return (
            <div className="row">
                <div>
                    {this.props.player1.name}
                    <div className="row dices">
                        <Dice val={this.props.player1.dice1} />
                        <Dice val={this.props.player1.dice2}/>
                    </div>
                    <Scores currentScore={this.props.player1.currentScore} finalScore={this.props.player1.finalScore} />
                </div>
                <div>
                    {this.props.player2.name}
                    <div className="row dices">
                        <Dice val={this.props.player2.dice1}/>
                        <Dice val={this.props.player2.dice2}/>
                    </div>
                    <Scores currentScore={this.props.player2.currentScore} finalScore={this.props.player2.finalScore} />
                </div>
            </div>
        );
    }
}

export default Players;