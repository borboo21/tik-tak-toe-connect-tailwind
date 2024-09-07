import { Component } from 'react';
import { connect } from 'react-redux';

export class InformationContainer extends Component {
	render() {
		return (
			<div>
				{this.props.isDraw ? (
					<p className="player">Ничья</p>
				) : this.props.isGameEnded ? (
					<p className="player">Победа:{this.props.currentPlayer} </p>
				) : (
					<p className="player">Ходит:{this.props.currentPlayer}</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
