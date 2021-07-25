import React, { Component } from "react";

class gheItem extends Component {
  constructor (chair) {
    super(chair);
    this.state = {
        check: false,
        
    }
};
renderChair = () => {
  if(this.state.check) { 
      return true;
  }
  return false;
}
remove = () => {
  this.handleAddChair();
  this.setState({
    check: false,
  });
};
selected = () => {
  this.handleAddChair();
  this.setState({
    check: true,
  });
  
};
handleAddChair = () => {
    this.props.addChair(this.props.gh);
  }
  render() {
    const {SoGhe, TrangThai} = this.props.gh;
    return (
      <div>
        {!TrangThai ?
         <button onClick = {!this.state.check ? this.selected : this.remove} className={`btn btn-${this.state.check ? 'success' : 'secondary'} my-2`} style={{width: "40%",}}>{SoGhe}</button>:
          <button  className="btn btn-danger my-2" style={{width: "40%",}}>{SoGhe}</button>
         
  }
       
      </div>
    );
  }
}

export default gheItem;
