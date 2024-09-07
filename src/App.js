import './index.css';
import { Information, Field } from './components';
import { reset } from './store/action-types';
import { connect } from 'react-redux';
import { Component } from 'react';

export class AppContainer extends Component {
	retry = () => {
		this.props.reset();
	};

	render() {
		return (
			<div className="flex justify-center flex-col items-center">
				<Information />
				<Field />
				{(this.props.isGameEnded || this.props.isDraw) && (
					<div className="p-4 m-4">
						<button
							className="p-3 cursor-pointer bg-lightcyan text-2xl border-2 border-gray-300"
							onClick={() => this.retry()}
						>
							Попробовать снова
						</button>
					</div>
				)}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

const mapDispatchToPros = {
	reset,
};

export const App = connect(mapStateToProps, mapDispatchToPros)(AppContainer);
