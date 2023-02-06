import * as Yup from 'yup';

export const ArticleFormSchemaValidate = Yup.object().shape({
	title: Yup.string()
		.min(3, 'Too Short title!')
		.max(255, 'Too Long name!')
		.required('Required'),
	description: Yup.string()
		.min(3, 'Too Short title!')
		.required('Required'),
});
