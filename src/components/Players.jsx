import React, { Component } from 'react';

// COMPONENTS
import Dice from './Dice';
import Scores from './Scores';

// CSS
import styled from 'styled-components';

const CurPlayer = styled.p`
    color: ${activePlayer};
`;

function activePlayer(props) {
    if(props.active) {
        return "red"
    } else {
        return "yellow"
    }
}

class Players extends Component {

    render() {
        return (
            <div className="row">
                <div>
                    <CurPlayer active={this.props.curPlayer === "player1"}>{this.props.player1.name}</CurPlayer>
                    <div className="row dices">
                        <Dice val={this.props.player1.dice1} />
                        <Dice val={this.props.player1.dice2}/>
                    </div>
                    <Scores currentScore={this.props.player1.currentScore} finalScore={this.props.player1.finalScore} />
                </div>
                <div>
                    <CurPlayer active={this.props.curPlayer === "player2"}>{this.props.player2.name}</CurPlayer>
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