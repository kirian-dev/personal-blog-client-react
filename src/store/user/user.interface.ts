import { IUser } from '@/types/user.interface';

export interface IUserState {
	email: string;
	username: string;
	roles: string[];
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IUserInitialState {
	user: IUserState | null;
	isLoading: boolean;
}

export interface ISignInCreadetionals {
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ISignUpCreadetionals {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		roles: string[];
	}
}
