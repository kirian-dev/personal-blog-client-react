import { Fragment } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { HomeScreen } from '../components/screens/home';
import { Layout } from '../components/layout';
import { ArticlesScreen } from '@/components/screens/articles';

export const AppRoutes = () => {
	return (
		<>
			<Layout title="">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/articles" element={<ArticlesScreen />} />
				</Routes>
			</Layout>
		</>
	);
};
