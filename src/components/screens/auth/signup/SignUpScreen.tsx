import { FC } from 'react';
import { SignUpForm } from './SignUpForm';

export const SignUpScreen: FC = () => {
	return (
		<div className="h-full grid place-items-center w-full mt-14 mb-48">
			<SignUpForm />
		</div>
	);
};
