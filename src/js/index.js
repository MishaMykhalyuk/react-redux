import React from 'react';
import ReactDOM from 'react-dom';
import Rx from "rxjs";
import Slider from './Slider.js';
import createReducer from './createReducer.js'
import createStore from './createStore.js'
import { moverActions } from './actions.js';

const moverReducer = createReducer(
	moverActions.moveRigth$
		.map(value => 
			state => Object.assign(state, { value: state.value + value })
		),

	moverActions.moveLeft$
		.map(value => 
			state => Object.assign(state, { value: state.value - value })
		)
);

const reducer = createReducer(moverReducer);

const store = createStore(reducer, Rx.Observable.of({ value: 10 }));

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