import React, { Component } from 'react';

class Roll extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.roll}>Roll</button>
            </div>
        );
    }
}

export default Roll;