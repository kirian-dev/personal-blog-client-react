import { PROFILE_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { FC } from 'react';
import { ProfileForm } from './profile-form';

export const ProfileScreen: FC = () => {
	return (
		<main>
			<Heading type="large" className="">
				{PROFILE_TITLE}
			</Heading>
			<ProfileForm />
		</main>
	);
};
