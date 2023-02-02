import { FC } from 'react';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import {
	NOT_HAVE_ACCOUNT,
	SIGNIN_TEXT,
	SIGNUP_TEXT,
} from '@/common/constants/content.constant';
import { Field } from '@/components/ui/field';
import { Link } from 'react-router-dom';
import { useAction } from '@/common/hooks/useAction';
import { SignInSchemaValidate } from '../auth.validate';

export const SignInForm: FC = () => {
	const { signIn } = useAction();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: SignInSchemaValidate,
		onSubmit: async values => {
			signIn(values);
			formik.resetForm();
		},
	});
	return (
		<form className="p-6 rounded-lg form-signin" onSubmit={formik.handleSubmit}>
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
					{SIGNIN_TEXT}
				</Button>
				<div className="flex flex-col items-end">
					<span className="text-xs">{NOT_HAVE_ACCOUNT}</span>
					<Link to="/signup">{SIGNUP_TEXT}</Link>
				</div>
			</div>
		</form>
	);
};
