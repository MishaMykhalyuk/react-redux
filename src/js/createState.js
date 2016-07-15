import Rx from "rxjs";

export default function createState(reducer$, initialState$ = Rx.Observable.of({})) {
	return initialState$
		.merge(reducer$)
		.scan((state, reducer) => reducer(state))
};