import React from 'react';

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

export default Slider;