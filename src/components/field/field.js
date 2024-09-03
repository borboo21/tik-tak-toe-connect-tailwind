import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../store/action-types';
import { checkDraw, checkWinner } from '../../utils/check';

export const FieldContainer = ({
	field,
	isGameEnded,
	isDraw,
	currentPlayer,
	dispatch,
}) => {
	const setFieldValue = (i) => {
		if (field[i]) return;
		if (isGameEnded || isDraw) return;
		let newValue = field.slice();
		newValue[i] = currentPlayer;
		const result = checkWinner(newValue, currentPlayer);
		if (result) {
			dispatch({ type: ACTION_TYPES.SET_END });
		} else if (checkDraw(newValue)) {
			dispatch({ type: ACTION_TYPES.SET_DRAW });
		} else {
			dispatch({ type: ACTION_TYPES.TOGGLE_PLAYER });
		}
		dispatch({ type: ACTION_TYPES.SET_FIELD, payload: newValue });
	};

	return (
		<div className="flex max-w-72 max-h-72 flex-wrap">
			{field.map((btn, index) => {
				return (
					<span key={index}>
						<button
							key={index}
							className="w-24 h-24 bg-cyan-50 cursor-pointer border-2 text-2xl"
							style={{ color: btn ? 'black' : 'lightcyan' }}
							disabled={isDraw || isGameEnded}
							onClick={() => {
								setFieldValue(index);
							}}
						>
							{btn || '-'}
						</button>
					</span>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

export const Field = connect(mapStateToProps)(FieldContainer);
