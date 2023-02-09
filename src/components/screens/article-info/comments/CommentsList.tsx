import { COMMENTS_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { FC, useState } from 'react';
import { CommentsListItem } from './CommentsListItem';
import { IComment, ICommentCreate } from '@/types/comment.interface';
import { useAuth } from '@/common/hooks/useAuth';
import { useFormik } from 'formik';
import { Field } from '@/components/ui/field';
import { Loader } from '@/components/ui/loader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Props {
	comments: IComment[];
	deleteComment: (id: string) => void;
	createComment: (body: ICommentCreate) => void;
	isLoadingComments: boolean;
}

export const CommentsList: FC<Props> = ({
	comments,
	deleteComment,
	createComment,
	isLoadingComments,
}) => {
	const { user } = useAuth();
	const formik = useFormik({
		initialValues: {
			body: '',
		},
		onSubmit: async values => {
			const data: ICommentCreate = {
				body: values.body,
				userId: user?._id || '',
				username: user?.username || '',
			};
			await createComment(data);
			formik.resetForm();
		},
	});

	const deleteCommentById = async (id: string) => {
		await deleteComment(id);
	};

	return (
		<section className="h-full">
			<Heading type="medium" className="mt-10 mb-4">
				{COMMENTS_TITLE}
			</Heading>
			{user ? (
				<form
					className="flex justify-between items-center"
					onSubmit={formik.handleSubmit}
				>
					<Field
						name="body"
						placeholder="Enter your comment"
						value={formik.values.body}
						outline={false}
						onChange={formik.handleChange}
						error={formik.errors.body}
						className=""
						labelText={''}
						type={'text'}
					/>
					<Button
						type="submit"
						className="text-white rounded-lg mb-2 w-full ml-3 h-full"
					>
						Add Comment
					</Button>
				</form>
			) : (
				<div className="">
					Please <Link to="/signin" className='text-green-300'>login</Link> to leave a comment
				</div>
			)}

			<div className="mt-8">
				{isLoadingComments ? (
					<Loader />
				) : !!comments && comments.length > 0 ? (
					comments?.map((comment: IComment) => (
						<CommentsListItem
							comment={comment}
							user={user}
							key={comment._id}
							deleteComment={deleteCommentById}
						/>
					))
				) : (
					<div className="flex justify-center items-center 3xl">
						Comments not found
					</div>
				)}
			</div>
		</section>
	);
};
