import { lazyImport } from '@/common/helpers/lazyImport';
import { HomeScreen } from '@/components/screens/home';

const { ArticlesScreen } = lazyImport(
	() => import('@/components/screens/articles'),
	'ArticlesScreen'
);
const { ArticleInfo } = lazyImport(
	() => import('@/components/screens/article-info'),
	'ArticleInfo'
);
const { SignInScreen } = lazyImport(
	() => import('@/components/screens/auth'),
	'SignInScreen'
);
const { SignUpScreen } = lazyImport(
	() => import('@/components/screens/auth'),
	'SignUpScreen'
);
const { AboutScreen } = lazyImport(
	() => import('@/components/screens/about'),
	'AboutScreen'
);
const { ProfileScreen } = lazyImport(
	() => import('@/components/screens/profile'),
	'ProfileScreen'
);

const { AdminPanelScreen } = lazyImport(
	() => import('@/components/screens/admin'),
	'AdminPanelScreen'
);
export const commonRoutes = [
	{
		path: '/',
		element: <HomeScreen />,
	},
	{
		path: '/articles',
		element: <ArticlesScreen />,
	},
	{
		path: '/articles/:id',
		element: <ArticleInfo />,
	},
	{
		path: '/signin',
		element: <SignInScreen />,
	},
	{
		path: '/signup',
		element: <SignUpScreen />,
	},
	{
		path: '/about',
		element: <AboutScreen />,
	},
];

export const userRoutes = [
	{
		path: '/profile',
		element: <ProfileScreen />,
	},
];

export const adminRoutes = [
	{
		path: '/admin/panel',
		element: <AdminPanelScreen />,
	},
];
