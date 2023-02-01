import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';
import {
	ALREADY_HAVE_ACCOUNT,
	INVALID_EMAIL,
	NOT_HAVE_ACCOUNT,
	PASSWORD_NOT_MATCH,
	REQUIRED_FIELD,
	SIGNIN_TEXT,
	SIGNUP_TEXT,
} from '@/common/constants/content.constant';
import { Field } from '@/components/ui/field';
import { Link } from 'react-router-dom';
import { AuthSchemaValidate } from '../auth.validate';

interface Values {
	email: string;
	password: string;
	confirmPassword: string;
}

export const SignInForm: React.FC = () => {
	return (
		<Formik
			initialValues={{ email: '', password: '', confirmPassword: '' }}
			validationSchema={AuthSchemaValidate}
			validate={values => {
				const errors: Partial<Values> = {};
				if (!values.email) {
					errors.email = REQUIRED_FIELD;
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = INVALID_EMAIL;
				}
				if (!values.password) {
					errors.password = REQUIRED_FIELD;
				}
				if (!values.confirmPassword) {
					errors.confirmPassword = REQUIRED_FIELD;
				} else if (values.password !== values.confirmPassword) {
					errors.confirmPassword = PASSWORD_NOT_MATCH;
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form className="p-6 rounded-lg form-signin">
					<Field
						type="email"
						name="email"
						placeholder="Enter your email"
						labelText="Email"
						value=""
						outline={false}
						className="w-50"
					/>
					<Field
						type="password"
						name="password"
						placeholder="Enter your password"
						value=""
						outline={false}
						labelText="Password"
					/>
					<Field
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						value=""
						outline={false}
						labelText="Confirm Password"
					/>
					<div className="flex items-center justify-between mt-10">
						<Button
							type="submit"
							disabled={isSubmitting}
							className="px-4 mr-10"
						>
							{SIGNIN_TEXT}
						</Button>
						<div className="flex flex-col items-end">
							<span className="text-xs">{NOT_HAVE_ACCOUNT}</span>
							<Link to="/signup">{SIGNUP_TEXT}</Link>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
