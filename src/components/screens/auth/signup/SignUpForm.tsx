import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpSchemaValidate } from '../auth.validate';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { useAction } from '@/common/hooks/useAction';
import {
	ALREADY_HAVE_ACCOUNT,
	SIGNIN_TEXT,
	SIGNUP_TEXT,
} from '@/common/constants/content.constant';

export const SignUpForm: FC = () => {
	const { signUp } = useAction();
	const formik = useFormik({
		initialValues: {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: SignUpSchemaValidate,
		onSubmit: async values => {
			signUp(values);
			formik.resetForm();
		},
	});
	return (
		<form className="p-6 rounded-lg form-signin" onSubmit={formik.handleSubmit}>
			<Field
				type="text"
				name="username"
				placeholder="Enter your full name"
				labelText="Full Name"
				value={formik.values.username}
				outline={false}
				onChange={formik.handleChange}
				error={formik.errors.username}
			/>
			<Field
				type="email"
				name="email"
				placeholder="Enter your email"
				labelText="Email"
				value={formik.values.email}
				outline={false}
				onChange={formik.handleChange}
				error={formik.errors.email}
			/>
			<Field
				type="password"
				name="password"
				placeholder="Enter your password"
				value={formik.values.password}
				outline={false}
				labelText="Password"
				onChange={formik.handleChange}
				error={formik.errors.password}
			/>
			<Field
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				value={formik.values.confirmPassword}
				outline={false}
				labelText="Confirm Password"
				onChange={formik.handleChange}
				error={formik.errors.confirmPassword}
			/>
			<div className="flex items-center justify-between mt-10">
				<Button type="submit" className="px-4 mr-10">
					{SIGNUP_TEXT}
				</Button>
				<div className="flex flex-col items-end">
					<span className="text-xs">{ALREADY_HAVE_ACCOUNT}</span>
					<Link to="/signin">{SIGNIN_TEXT}</Link>
				</div>
			</div>
		</form>
	);
};
