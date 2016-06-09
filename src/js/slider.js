/*import React from 'react';
import ReactDOM from 'react-dom';

const {createStore} = require('redux');

const counter = (state = { value: 10}, action) => {
	switch (action.type) {
		case 'MOVE_RIGTH' :
			return {
				value: state.value + 1
			}
		case 'MOVE_LEFT' :
			return {
				value: state.value - 1
			}
		default:
			return state;
	}
}

const store = createStore(counter);

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

	moveRigth(){
		store.dispatch({
			type: 'MOVE_RIGTH'
		})
	}

	render(){
		return (
			<div>
				<input type="range" defaultValue={this.state.value} onChange={this.update}/>
				<p>{this.state.value}</p>
				<button onClick={this.moveRigth}>move rigth</button>
			</div>
		)
	}
}
*/