import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { HomeScreen } from '../components/screens/home';
import { Layout } from '../components/layout';
import { ArticlesScreen } from '@/components/screens/articles';
import { ArticleInfo } from '@/components/screens/articleInfo';
import { AboutScreen } from '@/components/screens/about';
import { SignInScreen } from '@/components/screens/auth/signin';
import { SignUpScreen } from '@/components/screens/auth/signup';

export const AppRoutes = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<>
			<Layout title="">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/articles/" element={<ArticlesScreen />} />
					<Route path="/articles/:id" element={<ArticleInfo />} />
					<Route path="/about" element={<AboutScreen />} />
					<Route path="/signin" element={<SignInScreen />} />
					<Route path="/signup" element={<SignUpScreen />} />
				</Routes>
			</Layout>
		</>
	);
};
