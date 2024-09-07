import { connect } from 'react-redux';
import { setDraw, setEnd, setField, setPlayer } from '../../store/action-types';
import { checkDraw, checkWinner } from '../../utils/check';
import { Component } from 'react';

export class FieldContainer extends Component {
	setFieldValue = (i) => {
		if (this.props.field[i]) return;
		if (this.props.isGameEnded || this.props.isDraw) return;
		let newValue = this.props.field.slice();
		newValue[i] = this.props.currentPlayer;
		const result = checkWinner(newValue, this.props.currentPlayer);
		if (result) {
			this.props.setEnd();
		} else if (checkDraw(newValue)) {
			this.props.setDraw();
		} else {
			this.props.setPlayer();
		}
		this.props.setField(newValue);
	};

	render() {
		return (
			<div className="flex max-w-72 max-h-72 flex-wrap">
				{this.props.field.map((btn, index) => {
					return (
						<span key={index}>
							<button
								key={index}
								className="w-24 h-24 bg-cyan-50 cursor-pointer border-2 text-2xl"
								style={{ color: btn ? 'black' : 'lightcyan' }}
								disabled={this.props.isDraw || this.props.isGameEnded}
								onClick={() => {
									this.setFieldValue(index);
								}}
							>
								{btn || '-'}
							</button>
						</span>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

const mapDispatchToPros = {
	setEnd,
	setDraw,
	setPlayer,
	setField,
};

export const Field = connect(mapStateToProps, mapDispatchToPros)(FieldContainer);
