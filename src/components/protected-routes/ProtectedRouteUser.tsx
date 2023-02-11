import { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';

export const ProtectedRouteUser: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/signin" />;
	}

	return children as ReactElement;
};
