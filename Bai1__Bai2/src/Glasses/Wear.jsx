import React, { Component } from 'react';

class Wear extends Component {
    render() {
        const { url } = this.props.selected;
        return (
            <div style={{zIndex: "10",position: "absolute", left: "43.8%", top: "31%"}}>
                <img src = {url} style={{width: "180px"}}></img>
            </div>
        );
    }
}

export default Wear;