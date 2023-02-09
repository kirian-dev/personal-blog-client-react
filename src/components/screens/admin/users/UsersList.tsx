import { FC } from 'react';
import {
	ARTICLES_TITLE,
	USERS_TITLE,
} from '@/common/constants/content.constant';
import { useArticles } from '@/common/hooks/useArticles';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';

import { UsersListItem } from './UsersListItem';
import { Button } from '@/components/ui/button';
import { useUsers } from './useUsers';

export const UsersList: FC = () => {
	const { data, isLoading } = useUsers();
	return (
		<main className="">
			<Heading type="large" className="text-3xl">
				{USERS_TITLE}
			</Heading>

			{isLoading ? (
				<Loader />
			) : (
				<table className="table-auto w-full">
					<thead>
						<tr className="bg-gray-800 text-white">
							<th className="sm:px-4 py-2">#</th>
							<th className="sm:px-4 py-2">Created At</th>
							<th className="sm:px-4 py-2">Email</th>
							<th className="sm:px-4 py-2">Full name</th>
							<th className="sm:px-4 py-2">roles</th>
						</tr>
					</thead>
					<tbody className="">
						{data && data.length ? (
							data?.map((user, index) => (
								<UsersListItem key={user._id} user={user} index={index} />
							))
						) : (
							<>
								<div className="flex justify-between items-center w-full mt-4">
									Users not found
								</div>
							</>
						)}
					</tbody>
				</table>
			)}
		</main>
	);
};
