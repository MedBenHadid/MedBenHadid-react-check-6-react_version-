import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  Num :0 }
  }

  fac(result){ 
    this.setState({Num:result}); 
  };

  render() {
    return (
      <div>
        <button  onClick={()=>this.fac(0)}>0</button>	
        <button  onClick={()=>this.fac(1)}>1</button>	
        <button  onClick={()=>this.fac(2)}>2</button>	
        <button  onClick={()=>this.fac(3)}>3</button>	
        <button  onClick={()=>this.fac(4)}>4</button>	
        <button  onClick={()=>this.fac(5)}>5</button>	
        <button  onClick={()=>this.fac(6)}>6</button>
        <button  onClick={()=>this.fac(7)}>7</button>
        <button  onClick={()=>this.fac(8)}>8</button>
        <button  onClick={()=>this.fac(9)}>9</button>
        <br/>
    	  the factorial of {this.state.Num} is {this.state.Num*this.state.Num}
      </div>
    );
  }
}
export default App;