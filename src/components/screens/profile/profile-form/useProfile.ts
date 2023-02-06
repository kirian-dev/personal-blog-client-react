import { toastError } from '@/common/helpers/toastrError';
import { IUpdateUser } from './../../../../types/user.interface';
import { UserService } from './../../../../services/users/user.service';
import { useAuth } from '@/common/hooks/useAuth';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
export const useProfile = () => {
	const { user } = useAuth();

	if (user) {
		const queryData = useQuery('get user', () => UserService.byId(user._id), {
			onError(error) {
				toastError(error, 'Get user profile');
			},
		});

		const { mutateAsync: updateUser } = useMutation(
			'update user',
			(data: IUpdateUser) =>
				UserService.update(user._id, { ...data, roles: user?.roles }),
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
			...queryData,
			updateUser,
		};
	}
};
