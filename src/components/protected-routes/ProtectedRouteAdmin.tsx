import { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';

export const ProtectedRouteAdmin: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/signin" />;
	}

  if (!user.roles.includes('admin')) {
    return <Navigate to="/profile" />;
  }
	return children as ReactElement;
};
