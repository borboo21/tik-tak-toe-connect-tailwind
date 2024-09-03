import './index.css';
import { Information, Field } from './components';
import { ACTION_TYPES } from './store/action-types';
import { connect } from 'react-redux';

export const AppContainer = ({ isGameEnded, isDraw, dispatch }) => {
	const retry = () => {
		dispatch({ type: ACTION_TYPES.RESET });
	};

	return (
		<div className="flex justify-center flex-col items-center">
			<Information />
			<Field />
			{(isGameEnded || isDraw) && (
				<div className="p-4 m-4">
					<button
						className="p-3 cursor-pointer bg-lightcyan text-2xl border-2 border-gray-300"
						onClick={() => retry()}
					>
						Попробовать снова
					</button>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const App = connect(mapStateToProps)(AppContainer);
