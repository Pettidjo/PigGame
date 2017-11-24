import React, { Component } from 'react';

class Hold extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.hold} >Hold</button>
            </div>
        );
    }
}

export default Hold;