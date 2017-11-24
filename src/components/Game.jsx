import React, { Component } from 'react';

// COMPONENTS
import Players from './Players';
import Roll from './Roll';
import Hold from './Hold';

// CSS
import '../index.css';

const maxScore = 20;

class Game extends Component {

    state = {
        currentPlayer: "player1",
        player1: {
            name: "player1",
            dice1: null,
            dice2: null,
            currentScore: 0,
            finalScore: 0    
        },
        player2: {
            name: "player2",
            dice1: null,
            dice2: null,
            currentScore: 0,
            finalScore: 0
        }
    }

    initialState = {...this.state};

    random = () => {
        return Math.floor(Math.random() * 6 + 1);
    }

    updatePlayerDice = () => {
        const curPlayer = this.state.currentPlayer;

        this.setState({
            [curPlayer]: {
                ...this.state[curPlayer],
                dice1: this.random(),
                dice2: this.random()
            }
        }, this.currentScore)
    }

    currentScore = () => {
        const curPlayer = this.state.currentPlayer;
        
        let score = this.state[curPlayer].currentScore;
        const dice1 = this.state[curPlayer].dice1;
        const dice2 = this.state[curPlayer].dice2;
        score = score + dice1 + dice2;

        if(dice1 === 1 || dice2 === 1) {
            this.setState({
                [curPlayer]: {
                    ...this.state[curPlayer],
                    currentScore: 0
                }
            })
            this.nextPlayer();
        } else {
            this.setState({
                [curPlayer]: {
                    ...this.state[curPlayer],
                    currentScore: score
                }
            })
        }
    }

    nextPlayer = () => {
        const curPlayer = this.state.currentPlayer;
        curPlayer === "player1" 
            ? this.setState({ currentPlayer: "player2" }) 
            : this.setState({ currentPlayer: "player1" });        
    }

    holdScore = () => {
        const curPlayer = this.state.currentPlayer;

        let currentScore = this.state[curPlayer].currentScore;
        let finalScore = this.state[curPlayer].finalScore;

        const updateFinalScore = finalScore + currentScore;

        this.setState({
            [curPlayer]: {
                ...this.state[curPlayer],
                dice1: null,
                dice2: null,
                currentScore: 0,
                finalScore: updateFinalScore
            }
        }, this.checkScore)
    }

    checkScore = () => {
        const curPlayer = this.state.currentPlayer;
        if (this.state[curPlayer].finalScore > maxScore) {
            alert(`You win ${this.state[curPlayer].name}`)
            this.reset() 
        } else {
            this.nextPlayer()
        }
    }

    reset = () => {
        this.setState(this.initialState);
    }

    render() {
        return (
            <div className="container">
                <Players player1={this.state.player1} player2={this.state.player2} />
                <div className="btn-row" >
                    <Roll roll={this.updatePlayerDice} />
                    <Hold hold={this.holdScore}/>
                </div>
            </div>
        );
    }
}

export default Game;