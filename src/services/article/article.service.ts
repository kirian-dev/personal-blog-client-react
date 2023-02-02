import { IArticle } from './../../types/article.interface';
import axios from 'axios';
import { API_URL, getArticlesUrl } from '@/configs/api.config';
import { api } from '@/api/fetch';

export const ArticleService = {
	async create(data: IArticle) {
		const response = await api({
			url: `${API_URL}${getArticlesUrl('')}`,
			method: 'POST',
			body: data,
		});

		return response;
	},
	async getArticles() {
		const response = await api({
			url: `${API_URL}${getArticlesUrl('')}`,
			method: 'GET',
		});
		return response.data;
	},
	async byId(id: string) {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'GET',
		});
		return response.data;
	},
	async update(id: string, data: IArticle) {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'PUT',
			body: data,
		});

		return response;
	},
	async deleteA(id: string) {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'DELETE',
		});
	},
};
