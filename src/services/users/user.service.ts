import { IUpdateUser } from './../../types/user.interface';
import { IUser } from '@/types/user.interface';
import { getUsersUrl } from './../../configs/api.config';
import { api } from '@/api/fetch';
import { API_URL } from '@/configs/api.config';
import { AuthService } from '../auth/auth.service';

export const UserService = {
	async getUsers(): Promise<IUser[]> {
		const response = await api({
			url: `${API_URL}${getUsersUrl('')}`,
			method: 'GET',
		});

		return response.data;
	},

	async byId(id: string): Promise<IUser> {
		const response = await api({
			url: `${API_URL}${getUsersUrl(`/profile/${id}`)}`,
			method: 'GET',
		});

		return response.data;
	},

	async update(id: string, body: IUpdateUser): Promise<IUser> {
		const response = await api({
			url: `${API_URL}${getUsersUrl(`/profile/${id}`)}`,
			method: 'PUT',
			body,
		});


		return response.data;
	},
};
