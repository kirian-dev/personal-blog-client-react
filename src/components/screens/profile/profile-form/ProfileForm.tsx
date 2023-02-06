import { FC } from 'react';
import { useFormik } from 'formik';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import {
	PROFILE_UPDATE_BUTTON,
	PROFILE_EDIT_TITLE,
} from '@/common/constants/content.constant';
import { ProfileFormSchemaValidate } from './profile-form.validate';
import { useProfile } from './useProfile';
import { Loader } from '@/components/ui/loader';
import { Link } from 'react-router-dom';

export const ProfileForm: FC<{}> = () => {
	const { isLoading, updateUser, data } = useProfile();
	console.log(data);
	const formik = useFormik({
		initialValues: {
			email: data && data?.email,
			username: data && data?.username,
			password: '',
			confirmPassword: '',
		},
		validationSchema: ProfileFormSchemaValidate,
		onSubmit: async values => {
			await updateUser({
				email: values.email,
				username: values.username,
				password: values.password,
				confirm_password: values.confirmPassword,
			});
			formik.resetForm();
		},
	});

	return (
		<div className="flex justify-center items-start flex-col my-10">
			<Heading type="medium" className="">
				{PROFILE_EDIT_TITLE}
			</Heading>
			<form
				className="rounded-lg flex flex-col justify-start items-start my-10 w-80"
				onSubmit={formik.handleSubmit}
			>
				{isLoading && !data ? (
					<Loader />
				) : (
					<>
						<Field
							type="text"
							name="username"
							placeholder="Enter your full name"
							labelText="Full Name"
							value={formik.values.username}
							outline={false}
							onChange={formik.handleChange}
							error={formik.errors.username}
							className="w-80"
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
							labelText="New password"
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
					</>
				)}

				<div className="flex justify-start items-start w-full mt-5">
					<Button className="px-4 mr-4 border-transparent text-green-300">
						<Link to="/articles">Close</Link>
					</Button>
					<Button type="submit" className="px-4">
						{PROFILE_UPDATE_BUTTON}
					</Button>
				</div>
			</form>
		</div>
	);
};
