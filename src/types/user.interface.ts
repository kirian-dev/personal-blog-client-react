export interface IUser {
	_id: string;
	createdAt: string;
	updatedAt: string;
	roles: string[];
	email: string;
	username: string;
}

export interface IUpdateUser {
	email?: string;
	password?: string;
	confirm_password?: string;
	username?: string;
	roles?: string[];
}
