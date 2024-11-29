import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, error: null };

const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
			if (action.payload) { state.error = null; }
		},
		setError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { setIsLoading, setError } = loadingSlice.actions;
export default loadingSlice.reducer;