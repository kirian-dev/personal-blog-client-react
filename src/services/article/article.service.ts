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
	async create(data: IArticleCreate): Promise<IArticle | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getArticlesUrl('')}`,
				method: 'POST',
				body: data,
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async getArticles(
		searchTerm: string,
		limit: number | undefined,
		page: number
	): Promise<IArticlesResponse | undefined> {
		try {
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
		} catch (error) {
			console.log(error);
		}
	},
	async byId(id: string): Promise<IArticle | null | undefined> {
		try {
			const response = await axios.get(`${API_URL}${getArticlesUrl(`/${id}`)}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async update(
		id: string | undefined,
		data: IArticle
	): Promise<IArticle | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
				method: 'PUT',
				body: data,
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async delete(id: string | undefined): Promise<void> {
		try {
			const response = await api({
				url: `${API_URL}${getArticlesUrl(`/${id}`)}`,
				method: 'DELETE',
			});
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async getComments(articleId: string): Promise<IComment[] | undefined> {
		try {
			const response = await axios.get<IComment[]>(
				`${API_URL}${getArticlesUrl(`/${articleId}/comments`)}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async createComment(
		articleId: string,
		data: ICommentCreate
	): Promise<ICommentCreate | undefined> {
		try {
			const response = await api({
				url: `${API_URL}${getArticlesUrl(`/${articleId}/comments`)}`,
				method: 'POST',
				body: data,
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	async deleteComment(
		articleId: string | undefined,
		commentId: string
	): Promise<void> {
		try {
			const response = await api({
				url: `${API_URL}${getArticlesUrl(
					`/${articleId}/comments/${commentId}`
				)}`,
				method: 'DELETE',
			});
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
