import React, { Component } from 'react';

class GlassesItem extends Component {
    handleView = () => {
        this.props.selected(this.props.glasses);
    }
    render() {
        const {url, price} = this.props.glasses;
        return (
            <div>

                    <img src = {url} alt="glasses" onClick={this.handleView} style= {{width: "110px"}} />
            </div>
        );
    }
}

export default GlassesItem;