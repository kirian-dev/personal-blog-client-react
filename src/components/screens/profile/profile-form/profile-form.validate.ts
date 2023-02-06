import * as Yup from 'yup';

export const ProfileFormSchemaValidate = Yup.object().shape({
	username: Yup.string()
		.min(5, 'Too Short name!')
		.max(32, 'Too Long name!')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(6, 'Too short password!')
		.max(32, 'Too long password!'),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Passwords must match'
	),
});
