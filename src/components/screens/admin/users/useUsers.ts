import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { toastError } from '@/common/helpers/toastrError';
import { UserService } from './../../../../services/users/user.service';

export const useUsers = () => {
	const queryData = useQuery(
		['users'],
		() => {
			return UserService.getUsers();
		},
		{
			onError(error) {
				toastError(error, 'Get users');
			},
		}
	);
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	);
};
