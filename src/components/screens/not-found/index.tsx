import { Heading } from '@/components/ui/heading';
import { FC } from 'react';

export const PageNotFound: FC = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<Heading type="large">404 Page not found</Heading>
		</div>
	);
};
