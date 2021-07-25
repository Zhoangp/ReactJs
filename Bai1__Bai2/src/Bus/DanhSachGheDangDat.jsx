import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {
    renderDsGheDangDat = () => {
        const dsGheDangDatHTML = this.props.dsGhe.map((item) => { 
            const {SoGhe, Gia} = item.busSeat;
            return (
                <div>
                <h4>Ghế: {SoGhe} ${Gia} <a href style= {{color: "red", cursor: "pointer"}}>[Huỷ]</a> </h4> 
            </div>
            );
        });
        return dsGheDangDatHTML;
    }
    render() {
        return (
            <div>
                <h2 style={{color: "#ecec9e"}}>Danh Sách Ghế Đã Đặt ({this.props.dsGhe.length})</h2>
                {this.renderDsGheDangDat()}
                </div>
        );
    }
}

export default DanhSachGheDangDat;