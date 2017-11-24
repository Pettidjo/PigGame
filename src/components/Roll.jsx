import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: green;
    padding: .8em 1.4em;
    color: #fff;
    border: none;
    font-size: 14px;
    width: 100px;
    text-transform: uppercase;
`;

class Roll extends Component {

    render() {
        return (
            <div>
                <Button onClick={this.props.roll}>Roll</Button>
            </div>
        );
    }
}

export default Roll;