import { connect } from 'react-redux';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div>
			{isDraw ? (
				<p className="player">Ничья</p>
			) : isGameEnded ? (
				<p className="player">Победа:{currentPlayer} </p>
			) : (
				<p className="player">Ходит:{currentPlayer}</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
