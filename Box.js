import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			<div className="box">
			<center>{this.props.name}</center>
			<p>{this.props.des}</p>
			<button>Savoir plus</button>
			<h1>name : {this.props.name}</h1>
			<p>price : {this.props.price} </p>
			</div>


			);
	}
}

export default Box;