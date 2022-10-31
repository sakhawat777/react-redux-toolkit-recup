import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postSlice';

const store = configureStore({
	reducer: {
		// we can used any name of counterReducer, also same as counter container
		counter: counterReducer,
		// for combine or multiple reducer
		posts: postReducer,
	},
});
export default store;
