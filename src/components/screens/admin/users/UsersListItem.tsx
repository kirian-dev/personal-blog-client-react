import { formattedDate } from '@/common/helpers/formattedDate';
import { IUser } from '@/types/user.interface';
import { FC } from 'react';

interface Props {
	user: IUser;
	index: number;
}

export const UsersListItem: FC<Props> = ({ user, index }) => {
	return (
		<tr className="text-white text-xs md:text-lg">
			<td className="border sm:px-4 py-2">{index + 1}</td>
			<td className="border px-4 py-2">
				{user.createdAt && formattedDate(user.createdAt)}
			</td>
			<td className="border sm:px-4 py-2">{user.email}</td>
			<td className="border sm:px-4 py-2">{user.username}</td>
				<td className="border sm:px-4 py-2">{`${user.roles}`}</td>
		</tr>
	);
};
