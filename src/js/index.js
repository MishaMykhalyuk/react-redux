import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const mover = (state = { value: 10 }, action) => {
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

const store = createStore(mover);

const Slider = ({
	value,
	moveRigth,
	moveLeft
}) => (
	<div>
		<button onClick={moveLeft}>move left</button>
		<input min="1" max="100" type="range" value={value} />
		<button onClick={moveRigth}>move rigth</button>
		<h2>{value}</h2>
	</div>
)

const render = () => {
	ReactDOM.render(
		<Slider
			value={store.getState().value} 
			moveRigth={() => 
				store.dispatch({
					type: 'MOVE_RIGTH'
				})
			} 
			moveLeft={() => 
				store.dispatch({
					type: 'MOVE_LEFT'
				})
			} 
		/>,
		 document.getElementById('app'))
}

store.subscribe(render);

render();