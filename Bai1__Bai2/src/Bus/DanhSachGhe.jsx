import React, { Component } from 'react';
import GheItem from './gheItem';

class DanhSachGhe extends Component {
    renderGhe = () => {
        const gheHTML = this.props.ghe.map((item) => {
            console.log(item.Gia);
            return (
                <div className="col-3">
                      <GheItem dsGhe = {this.props.dsGhe} gh ={item} remove={this.remove} selected ={this.selected}  addChair={this.props.addChair}></GheItem>
                </div>
            )
        });
        return gheHTML;
    };
    render() {
        return (
            <div>
                
                <div style={{background: "rgb(226 226 226)", width: "90%", }}><h4 className="text-center">Tài xế </h4></div>
                <div className="row">{this.renderGhe()}</div>
            </div>
        );
    }
}

export default DanhSachGhe;