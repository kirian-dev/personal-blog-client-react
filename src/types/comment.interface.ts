export interface IComment {
	_id: string;
	username: string;
	userId: string;
	createdAt: string;
	updatedAt: string;
	body: string;
}

export interface ICommentCreate {
	body: string;
	userId: string;
	username: string;
}
