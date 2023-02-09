import { getLocalStorage } from './../../../../common/helpers/localStorage';

export interface IMenu {
	title: string;
	link: string;
}
const user = getLocalStorage('user')
export const menuList = [
	{
		title: 'Articles',
		link: '/articles',
	},
	{
		title: 'About',
		link: '/about',
	},
];