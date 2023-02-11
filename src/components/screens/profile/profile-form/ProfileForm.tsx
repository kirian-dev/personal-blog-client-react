import { FC, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { ProfileFormSchemaValidate } from './profile-form.validate';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import {
	PROFILE_UPDATE_BUTTON,
	PROFILE_EDIT_TITLE,
	CLOSE_TEXT,
} from '@/common/constants/content.constant';
import { IUpdateUser, IUser } from '@/types/user.interface';
interface Props {
	data: IUser;
	updateUser: UseMutateAsyncFunction<
		IUser | undefined,
		unknown,
		IUpdateUser,
		unknown
	>;
}
export const ProfileForm: FC<Props> = ({ data, updateUser }) => {
	const [dataUser, setDataUser] = useState(data);

	const formik = useFormik({
		initialValues: {
			email: dataUser?.email || '',
			username: dataUser?.username || '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: ProfileFormSchemaValidate,
		onSubmit: async values => {
			const updatedData = await updateUser({
				email: values.email,
				username: values.username,
				password: values.password,
				confirm_password: values.confirmPassword,
			});
			formik.resetForm();
			if (updatedData) {
				setDataUser(updatedData);
			}
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
				<div className="flex justify-start items-start w-full mt-5">
					<Button className="px-4 mr-4 border-transparent text-green-300">
						<Link to="/articles">{CLOSE_TEXT}</Link>
					</Button>
					<Button type="submit" className="px-4">
						{PROFILE_UPDATE_BUTTON}
					</Button>
				</div>
			</form>
		</div>
	);
};
