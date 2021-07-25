import React, { Component } from "react";
import GlassesList from "./GlassesList";
import Wear from './Wear';
class Home extends Component {
    constructor(glasses) {
        super(glasses);
        this.state = {
            check: 1,
        }
    }
    selected = (value) => {
            this.setState ({
                check: value, 
            })
    }
   
   
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending withamother of pearl effect tip.'}, 
    ];
    render() {
        return (
            <div style= {{ backgroundImage: "url(./img/background.jpg)",zIndex:"1", backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "800px"}}>
                <div style={{background: "black", position: "absolute", top: "0",zIndex:"2", bottom: "0", left: "0", right: "0", opacity: ".8"}}>
                </div>
                {this.state.check ? 
                        <Wear selected = {this.state.check}></Wear> :
                        null
            }
                <img src="./img/model.jpg"  style= {{zIndex: "9",width: "20%", position: "absolute", left: "40%", top: "20%"}} alt="model"/>
                <GlassesList glasses = {this.arrProduct} selected = {this.selected} ></GlassesList>
            </div>
        );
    }
}

export default Home;