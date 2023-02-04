export interface IArticle {
	_id?: string;
	title: string;
	description: string;
	createdAt?: string;
	updatedAt?: string;
	comments?: IComment[];
}

export interface IArticleCreate {
	title: string;
	description: string;
}

export interface IComment {
	_id: string;
}

export interface IMeta {
	pageCount: number;
	total: number;
	prevPage: number;
	currPage: number;
}

export interface IArticlesResponse {
	articles: IArticle[];
	meta: IMeta;
}
