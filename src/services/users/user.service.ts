import { IUpdateUser } from './../../types/user.interface';
import { IUser } from '@/types/user.interface';
import { getUsersUrl } from './../../configs/api.config';
import { api } from '@/api/fetch';
import { API_URL } from '@/configs/api.config';

export const UserService = {
	async getUsers(): Promise<IUser[] | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getUsersUrl('')}`,
				method: 'GET',
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},

	async byId(id: string | undefined): Promise<IUser | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getUsersUrl(`/profile/${id}`)}`,
				method: 'GET',
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},

	async update(id: string, body: IUpdateUser): Promise<IUser | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getUsersUrl(`/profile/${id}`)}`,
				method: 'PUT',
				body,
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
