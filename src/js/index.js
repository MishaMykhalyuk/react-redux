import React from 'react';
import ReactDOM from 'react-dom';
import Rx from "rxjs";
import Slider from './Slider.js';
import createReducer from './createReducer.js'
import createState from './createState.js'
import { moverActions } from './actions.js';

const moverReducer = createReducer(
	moverActions.moveRigth$
		.map(value => state => Object.assign(state, { value: state.value + value })),

	moverActions.moveLeft$
		.map(value => state => Object.assign(state, { value: state.value - value }))
);

const state = createState(moverReducer, Rx.Observable.of({ value: 30 }));

const render = state => {
	ReactDOM.render(
		<Slider
			value={state.value} 
			moveRigth={ () => moverActions.moveRigth$.next(1) }
			moveLeft={ () => moverActions.moveLeft$.next(1) }
		/>,
		 document.getElementById('app')
	)
};

state.subscribe(render);