import { createSlice } from "@reduxjs/toolkit";
import operations from "./operations";


const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	isAuthError: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers:{
		handleError(state, action){
			state.isAuthError = action.payload;
		}
	},
	extraReducers: {
		[operations.register.pending](state, _action) {
			state.isLoading = true;
		},
		[operations.register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.isAuthError = false;
			state.isLoading = false;
		},
		[operations.register.rejected](state, _action) {
			state.isAuthError = true;
			state.isLoading = false;
		},
		[operations.logIn.pending](state, _action) {
			state.isLoading = true;
		},
		[operations.logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.isAuthError = false;
		},
		[operations.logIn.rejected](state, _action) {
			state.isAuthError = true;
			state.isLoading = false;
		},
		[operations.logOut.fulfilled](state, _action) {
			state.user = {name: null, email: null};
			state.token = null;
			state.isLoggedIn = false;
			state.isAuthError = false;
			state.isRefreshing = false;
		}
	}
});


export const authReducer = authSlice.reducer;
export const { handleError } = authSlice.actions;