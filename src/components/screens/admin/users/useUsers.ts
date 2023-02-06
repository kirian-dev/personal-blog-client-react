import { toastError } from '@/common/helpers/toastrError';
import { UserService } from './../../../../services/users/user.service';
import { useQuery, useMutation } from 'react-query';
import { useMemo } from 'react';

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
