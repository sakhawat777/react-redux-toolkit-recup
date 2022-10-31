import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// calling api
export const fetchposts = createAsyncThunk('posts/fetchposts', async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return res.data;
});
const postSlice = createSlice({
	name: ' posts',
	initialState: {
		isLoading: false,
		posts: [],
		error: null,
	},
	// for asynchronous api calling like redux thunk
	extraReducers: (builder) => {
		builder.addCase(fetchposts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchposts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		builder.addCase(fetchposts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		});
	},
});
export default postSlice.reducer;
