import { FC } from 'react';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';

import { Field } from '@/components/ui/field';
import { useMutation } from 'react-query';
import { ArticleService } from '@/services/article/article.service';
import { toastError } from '@/common/helpers/toastrError';
import { toastr } from 'react-redux-toastr';
import { IArticleCreate } from '@/types/article.interface';

export const CreateArticleForm: FC = () => {
	const { mutateAsync } = useMutation(
		'create article',
		(data: IArticleCreate) => ArticleService.create(data),
		{
			onError(error) {
				toastError(error, 'Create article');
			},
			onSuccess() {
				toastr.success('Create article', 'create was successful');
			},
		}
	);

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},
		onSubmit: async values => {
			await mutateAsync(values);
			await formik.resetForm();
		},
	});

	return (
		<form className="rounded-lg w-1/2" onSubmit={formik.handleSubmit}>
			<Field
				type="text"
				name="title"
				placeholder="Enter your title"
				labelText="Title"
				value={formik.values.title}
				outline={false}
				onChange={formik.handleChange}
				error={formik.errors.title}
			/>
			<Field
				type="text"
				name="description"
				placeholder="Enter your description"
				value={formik.values.description}
				outline={false}
				labelText="Description"
				onChange={formik.handleChange}
				error={formik.errors.description}
			/>
			<Button type="submit" className="px-4 mr-10">
				Create
			</Button>
		</form>
	);
};
