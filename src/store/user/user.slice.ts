import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from './../../common/helpers/localStorage';
import { checkAuth, signIn, logout, signUp } from './user.actions';
import { IUserInitialState } from './user.interface';

const initialState: IUserInitialState = {
	user: getLocalStorage('user'),
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signUp.pending, state => {
				state.isLoading = true;
			})
			.addCase(signUp.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(signUp.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(signIn.pending, state => {
				state.isLoading = true;
			})
			.addCase(signIn.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(signIn.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user;
			});
	},
});

export const { reducer } = userSlice;
