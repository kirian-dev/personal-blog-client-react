import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import { errorCatch } from '@/api/api.helpers';
import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/common/helpers/toastrError';
import {
	IAuthResponse,
	ISignInCreadetionals,
	ISignUpCreadetionals,
} from './user.interface';
export const signUp = createAsyncThunk<IAuthResponse, ISignUpCreadetionals>(
	'auth/signup',
	async ({ confirmPassword, password, username, email }, thunkAPI) => {
		try {
			const response = await AuthService.signUp(
				username,
				email,
				confirmPassword,
				password
			);
			toastr.success('Registration', 'Completed successfully');
			redirect('/');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const signIn = createAsyncThunk<IAuthResponse, ISignInCreadetionals>(
	'auth/signin',
	async ({ email, password, confirmPassword }, thunkAPI) => {
		try {
			const response = await AuthService.signIn(
				email,
				password,
				confirmPassword
			);
			toastr.success('Login', 'Completed successfully');
			redirect('/');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getTokens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				);
				thunkAPI.dispatch(logout());
			}
			return thunkAPI.rejectWithValue(error);
		}
	}
);
