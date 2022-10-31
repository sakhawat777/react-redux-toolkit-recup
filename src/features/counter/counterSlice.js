import { createSlice } from '@reduxjs/toolkit';

// Slice is collection of logics (like increment, decrement, reset logics)
// counterSlice here name Slice is recommended by redux toolkit
const counterSlice = createSlice({
	name: 'counter',
	initialState: { count: 0 },
	reducers: {
		// reducers functions(state and payload)
		increment: (state) => {
			state.count = state.count + 1;
		},
		decrement: (state) => {
			state.count = state.count - 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		// for payload
		increaseByAmount: (state, actions) => {
			state.count = state.count + actions.payload;
		},
	},
});
// actions creator
export const { increment, decrement, reset, increaseByAmount } =
	counterSlice.actions;
export default counterSlice.reducer;
