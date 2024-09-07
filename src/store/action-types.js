export const ACTION_TYPES = {
	RESET: 'reset',
	SET_END: 'set_end',
	SET_DRAW: 'set_draw',
	TOGGLE_PLAYER: 'toggle_player',
	SET_FIELD: 'set_field',
};

export const reset = () => ({
	type: ACTION_TYPES.RESET,
});

export const setEnd = () => ({
	type: ACTION_TYPES.SET_END,
});
export const setDraw = () => ({
	type: ACTION_TYPES.SET_DRAW,
});
export const setPlayer = () => ({
	type: ACTION_TYPES.TOGGLE_PLAYER,
});
export const setField = (index) => ({
	type: ACTION_TYPES.SET_FIELD,
	payload: index,
});
