import { FC } from 'react';
import { useFormik } from 'formik';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import {
	CREATE_ARTICLE_FORM,
	CREATE_TEXT,
	DELETE_ARTICLE_MODAL_TEXT,
	DELETE_TEXT,
	UPDATE_ARTICLE_FORM,
	UPDATE_TEXT,
} from '@/common/constants/content.constant';
import { useEditArticle } from './useEditArticle';
import { ArticleFormSchemaValidate } from './article-form.validate';

export const ArticleForm: FC<{
	id?: string;
	type?: string;
	setShowModal: (x: boolean) => void;
}> = ({ id, type, setShowModal }) => {
	const { updateArticle, createArticle, deleteArticle } = useEditArticle({
		articleId: id,
		setShowModal,
	});

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},
		validationSchema: type === 'delete' ? null : ArticleFormSchemaValidate,
		onSubmit: async values => {
			if (type === 'update') {
				await updateArticle(values);
			}

			if (type === 'create') {
				await createArticle(values);
			}

			if (type === 'delete') {
				await deleteArticle(id || '');
			}

			formik.resetForm();
		},
	});

	return (
		<div className="flex justify-center items-center flex-col my-10">
			<Heading type="medium" className="">
				{(type === 'create' && CREATE_ARTICLE_FORM) ||
					(type === 'update' && UPDATE_ARTICLE_FORM)}
			</Heading>

			<form
				className="rounded-lg w-full flex flex-col justify-center items-center my-5 "
				onSubmit={formik.handleSubmit}
			>
				{type === 'delete' ? (
					<div className="mb-10">{DELETE_ARTICLE_MODAL_TEXT}</div>
				) : (
					<>
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
					</>
				)}
				<div className="flex justify-center items-start w-full">
					<Button
						onClick={() => setShowModal(false)}
						className="px-4 mr-4 border-transparent text-green-300"
					>
						Close
					</Button>
					<Button type="submit" className="px-4">
						{(type === 'create' && `${CREATE_TEXT}`) ||
							(type === 'update' && `${UPDATE_TEXT}`) ||
							(type === 'delete' && `${DELETE_TEXT}`)}
					</Button>
				</div>
			</form>
		</div>
	);
};
