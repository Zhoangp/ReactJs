import React, { Component } from 'react';

class Wear extends Component {
    render() {
        const { url, name, desc} = this.props.selected;
        return (
            <div style={{zIndex: "10",position: "absolute", left: "43.8%", top: "31%"}}>
                <img src = {url} style={{width: "180px"}}></img>
                <div style={{position: "absolute", left: "-29.5%", right: "-29.5%", top: "250%", background: "#f9ba2685"}}>
                <h3 style= {{color: "#9b68fb"}}>{name}</h3>
                <p>{desc}</p>
                </div>
            </div>
        );
    }
}

export default Wear;