export interface IUser  {
  _id: string;
  createdAt: string;
  updatedAt: string;
  roles: boolean;
  email: string;
  username: string;
};

export interface IUpdateUser {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
}