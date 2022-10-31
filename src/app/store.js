import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
	reducer: {
		// we can used any name of counterReducer, also same as counter container
		counter: counterReducer,
		// for combine or multiple reducer
		// todos: todosReducer
	},
});
export default store;
