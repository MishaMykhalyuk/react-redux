import Rx from 'rxjs';

const moverActions = {
	moveRigth$: new Rx.Subject,
	moveLeft$: new Rx.Subject
};

export { moverActions };