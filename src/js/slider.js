import React from 'react';
import ReactDOM from 'react-dom';

export default class Slider extends React.Component {
	constructor(){
		super();

		this.state = {
			value: 20
		}

		this.update = this.update.bind(this);
	}

	update(event){
		this.setState({
			value: event.target.value
		})
	}

	render(){
		return (
			<div>
				<input type="range" defaultValue={this.state.value} onChange={this.update}/>
				<p>{this.state.value}</p>
			</div>
		)
	}
}
