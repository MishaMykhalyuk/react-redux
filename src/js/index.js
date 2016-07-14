import React from 'react';
import ReactDOM from 'react-dom';
import Rx from "rxjs";
import createState from './createState.js'
import {Observable} from "rxjs/Observable";

function createReducer(...observables) {
	return Observable.merge.apply(Observable, observables);
};

const moverActions = {
	moveRigth$: new Rx.Subject,
	moveLeft$: new Rx.Subject
};

const moverReducer = createReducer(
	moverActions.moveRigth$.map(value => 
		state => Object.assign(state, { value: state.value + value })
	),

	moverActions.moveLeft$.map(value => 
		state => Object.assign(state, { value: state.value - value })
	)
);

const reducer = createReducer(moverReducer);

const store = createState(reducer, Rx.Observable.of({ value: 10 }));

const Slider = React.createClass({
	propTypes: {
		value: React.PropTypes.element.isRequired,
		moveRigth: React.PropTypes.func.isRequired,
		moveLeft: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<div>
				<button onClick={this.props.moveLeft}>move left</button>
				<input min="1" max="100" type="range" value={this.props.value} />
				<button onClick={this.props.moveRigth}>move rigth</button>
				<h2>{this.props.value}</h2>
			</div>
		);
	}
});

const render = state => {
	ReactDOM.render(
		<Slider
			value={state.value} 
			moveRigth={ () => moverActions.moveRigth$.next(1) }
			moveLeft={ () => moverActions.moveLeft$.next(1) }
		/>,
		 document.getElementById('app')
	)
}

store.subscribe(render);