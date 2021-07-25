import React, { Component } from 'react';
import GlassesItem from "./GlassesItem";

class GlassesList extends Component {
    renderGlasses = () => {
        const glassesHTML = this.props.glasses.map ((item) => {
            return ( 
                <li style={{ listStyle: "none", border: "1px black", cursor: "pointer",}}>
                    <GlassesItem glasses = {item} selected = {this.props.selected}></GlassesItem>
                </li>
            )
        });
        return glassesHTML;
    }
    render() {
        return (
            <div>
                <div style={{zIndex: "9",width: "90%", position: "absolute", bottom : "5%", left: "5%"}} >
                    <ul style ={{background:"white" ,display:"flex",justifyContent: "space-around", alignItems: "center", height: "100px"}}>
                    {this.renderGlasses()}
                    </ul>
                    </div>
            </div>
        );
    }
}

export default GlassesList;