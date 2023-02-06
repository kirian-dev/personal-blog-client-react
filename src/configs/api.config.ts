export const API_URL = `${process.env.API_DOMAIN}/api`;
export const getAuthUrl = (string: string) => `/auth${string}`;
export const getArticlesUrl = (string: string) => `/articles${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
