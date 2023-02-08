import {
	IArticle,
	IArticleCreate,
	IArticlesResponse,
} from '@/types/article.interface';
import { IComment, ICommentCreate } from '@/types/comment.interface';
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
	async getArticles(
		searchTerm: string,
		limit: number | undefined,
		page: number
	): Promise<IArticlesResponse> {
		const response = await axios.get<IArticlesResponse>(
			`${API_URL}${getArticlesUrl(``)}`,
			{
				params: {
					searchTerm: searchTerm || '',
					limit: limit,
					page: page,
				},
			}
		);
		return response.data;
	},
	async byId(id: string): Promise<IArticle | null> {
		const response = await axios.get(`${API_URL}${getArticlesUrl(`/${id}`)}`);
		return response.data;
	},
	async update(id: string | undefined, data: IArticle): Promise<IArticle> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'PUT',
			body: data,
		});

		return response.data;
	},
	async delete(id: string | undefined): Promise<void> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
			method: 'DELETE',
		});
		return response.data;
	},
	async getComments(articleId: string): Promise<IComment[]> {
		const response = await axios.get<IComment[]>(
			`${API_URL}${getArticlesUrl(`/${articleId}/comments`)}`
		);
		return response.data;
	},
	async createComment(
		articleId: string,
		data: ICommentCreate
	): Promise<ICommentCreate> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${articleId}/comments`)}`,
			method: 'POST',
			body: data,
		});

		return response.data;
	},
	async deleteComment(
		articleId: string | undefined,
		commentId: string
	): Promise<void> {
		const response = await api({
			url: `${API_URL}${getArticlesUrl(`/${articleId}/comments/${commentId}`)}`,
			method: 'DELETE',
		});
		return response.data;
	},
};
