import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastError } from '@/common/helpers/toastrError';
import { IUpdateUser } from '@/types/user.interface';
import { UserService } from '@/services/users/user.service';
import { useAuth } from '@/common/hooks/useAuth';
export const useProfile = () => {
	const { user } = useAuth();
	const userId = user?._id || '';

	const queryData = useQuery(
		['get user', user || null],
		() => UserService.byId(userId),
		{
			onError(error) {
				toastError(error, 'Get user profile');
			},
			cacheTime: 0,
		}
	);

	const { mutateAsync: updateUser } = useMutation(
		'update user',
		(data: IUpdateUser) =>
			UserService.update(userId, { ...data, roles: user?.roles }),
		{
			onError(error) {
				toastError(error, 'Update profile');
			},
			onSuccess() {
				toastr.success('Update profile', 'update was successful');
				queryData.refetch();
			},
		}
	);
	return {
		data: queryData.data,
		isLoading: queryData.isLoading,
		updateUser,
	};
};
