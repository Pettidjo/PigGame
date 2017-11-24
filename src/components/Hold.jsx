import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: red;
`;

class Hold extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.hold} >Hold</Button>
            </div>
        );
    }
}

export default Hold;