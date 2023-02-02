import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from '../components/layout';
import { adminRoutes, commonRoutes, userRoutes } from './commonRoutes';
import { ProtectedRouteAdmin, ProtectedRouteUser } from '@/components/protected-routes';

export const AppRoutes = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<>
			<Layout title="">
				<Routes>
					{commonRoutes.map(route => (
						<Route path={route.path} element={route.element} key={route.path} />
					))}

					{userRoutes.map(route => (
						<Route
							path={route.path}
							element={<ProtectedRouteUser>{route.element}</ProtectedRouteUser>}
							key={route.path}
						/>
					))}

					{adminRoutes.map(route => (
						<Route
							path={route.path}
							element={
								<ProtectedRouteAdmin>{route.element}</ProtectedRouteAdmin>
							}
							key={route.path}
						/>
					))}
				</Routes>
			</Layout>
		</>
	);
};
