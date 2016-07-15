import Rx from 'rxjs';

export default function createReducer(...observables) {
	return Rx.Observable.merge.apply(Rx.Observable, observables);
};