import {
	IArticle,
	IArticleCreate,
	IArticlesResponse,
} from '@/types/article.interface';
import { API_URL, getArticlesUrl } from '@/configs/api.config';
import { api } from '@/api/fetch';
import axios from 'axios';

export const ArticleService = {
	async create(data: IArticleCreate): Promise<IArticle> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl('')}`,
			method: 'POST',
			body: data,
		});

		return response.data;
	},
	async getArticles(searchTerm: string): Promise<IArticlesResponse> {
		const response = await axios.get<IArticlesResponse>(
			`${API_URL}${getArticlesUrl(``)}`,
			{
				params: searchTerm
					? {
							searchTerm,
					  }
					: {},
			}
		);
		return response.data;
	},
	async byId(id: string): Promise<IArticle | null> {
		const response = await axios.get(`${API_URL}${getArticlesUrl(`/${id}`)}`);
		return response.data;
	},
	async update(id: string, data: IArticle): Promise<IArticle> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'PUT',
			body: data,
		});

		return response.data;
	},
	async deleteA(id: string) {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'DELETE',
		});
		return response.data;
	},
};
