import { createSlice } from "@reduxjs/toolkit";

interface User {
	role: string;
	email: string;
	username: string;
	fullname: string;
	isLoggedIn: boolean;
}


const initialState: User = {
	username: '',
	role: '',
	email: '',
	fullname: '',
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		loginUser: (_state, _action) => { },
		setUser: (state, action) => {
			state.role = action.payload.role;
			state.email = action.payload.email;
			state.username = action.payload.username;
			state.fullname = action.payload.fullname;
			state.isLoggedIn = true;
		},
		resetUser: (state) => {
			state.role = "";
			state.email = "";
			state.fullname = "";
			state.username = "";
			state.isLoggedIn = false;
		}
	}
});

export const { loginUser, setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
