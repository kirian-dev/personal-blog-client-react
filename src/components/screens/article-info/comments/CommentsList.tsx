import { COMMENTS_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { FC, useState } from 'react';
import { CommentsListItem } from './CommentsListItem';
import { IComment } from '@/types/comment.interface';
import { useAuth } from '@/common/hooks/useAuth';
import { useComments } from './useComments';

export const CommentsList: FC<{ articleId: string }> = ({ articleId }) => {
	const [selectedCommentById, setSelectedCommentById] = useState<string>('');
	const { user } = useAuth();
	if (articleId) {
		const { data, createComment, deleteComment } = useComments(
			articleId,
			selectedCommentById
		);
	}

	return (
		<section>
			<Heading type="medium" className="mt-10">
				{COMMENTS_TITLE}
			</Heading>
			<form onSubmit={() => console.log()} className="flex">
				<input
					type="text"
					value={''}
					className="flex-1 p-2 border border-gray-400 rounded-lg "
				/>
				<button
					type="submit"
					className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
				>
					Add Comment
				</button>
			</form>
			<div className="mt-8">
				{!![] ? (
					[].length &&
					[]?.map((comment: IComment) => (
						<CommentsListItem comment={comment} user={user} key={comment._id} />
					))
				) : (
					<div className="flex justify-center items-center">
						Comments not found
					</div>
				)}
			</div>
		</section>
	);
};
