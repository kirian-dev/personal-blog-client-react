import axios from 'axios';
import Cookies from 'js-cookie';

import { API_URL, getAuthUrl } from '@/configs/api.config';

import { IAuthResponse } from '@/store/user/user.interface';

import { removeTokensStorage, saveToStorage } from './auth.helper';
import { getContentType } from '@/api/api.helpers';

export const AuthService = {
	async signUp(
		username: string,
		email: string,
		password: string,
		confirmPassword: string
	) {
		try {
			const response = await axios.post<IAuthResponse>(
				`${API_URL}${getAuthUrl('/signup')}`,
				{
					username,
					email,
					password,
					confirm_password: confirmPassword,
				}
			);

			if (response.data.accessToken) {
				saveToStorage(response.data);
			}

			return response;
		} catch (error) {
			console.log(error);
		}
	},
	async signIn(email: string, password: string, confirmPassword: string) {
		try {
			const response = await axios.post<IAuthResponse>(
				`${API_URL}${getAuthUrl('/signin')}`,
				{
					email,
					password,
					confirm_password: confirmPassword,
				}
			);

			if (response.data.accessToken) {
				saveToStorage(response.data);
			}

			return response;
		} catch (error) {
			console.log(error);
		}
	},
	logout() {
		removeTokensStorage();
		localStorage.removeItem('user');
	},
	async getTokens() {
		try {
			const refreshToken = Cookies.get('refreshToken');
			const response = await axios.post<IAuthResponse>(
				`${API_URL}${getAuthUrl('/signin/access-token')}`,
				{
					refreshToken,
				},
				{
					headers: getContentType(),
				}
			);

			if (response.data.accessToken) {
				saveToStorage(response.data);
			}

			return response;
		} catch (error) {
			console.error(error);
		}
	},
};
