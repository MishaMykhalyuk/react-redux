import Rx from "rxjs";

export default function createStore(reducer$, initialState$ = Rx.Observable.of({})) {
	return initialState$
		.merge(reducer$)
		.scan((state, reducer) => reducer(state))
		.publishReplay(1)
		.refCount();
};