import { FC } from 'react';
import { ProfileForm } from './profile-form';
import { PROFILE_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { useProfile } from './profile-form/useProfile';
import { Loader } from '@/components/ui/loader';

export const ProfileScreen: FC = () => {
	const { isLoading, updateUser, data } = useProfile();
	return (
		<main>
			<Heading type="large" className="">
				{PROFILE_TITLE}
			</Heading>
			{isLoading ? (
				<Loader />
			) : !!data ? (
				<ProfileForm updateUser={updateUser} data={data} />
			) : null}
		</main>
	);
};
