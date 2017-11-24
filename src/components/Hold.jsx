import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.disabled ? "rgba(231, 76, 60, .1)" : "rgba(231, 76, 60, 1)"};
    padding: .8em 1.4em;
    color: #fff;
    border: none;
    width: 100px;
    font-size: 14px;
    text-transform: uppercase;
    transition: .3s all ease-in-out;
    &:hover {
        background-color: rgba(231, 76, 60, .8);
    }
`;

class Hold extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.hold} disabled={this.props.disabled} >Hold</Button>
            </div>
        );
    }
}

export default Hold;