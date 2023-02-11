import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CommentsList } from './comments';
import { useArticleInfo } from './useArticleInfo';
import { Heading } from '@/components/ui/heading';
import { formattedDate } from '@/common/helpers/formattedDate';
import { Loader } from '@/components/ui/loader';
import { ALL_ARTICLES } from '@/common/constants/content.constant';
import rightArrows from '@/assets/chevrons-right.svg';

export const ArticleInfo: FC = () => {
	const {
		isLoading,
		data,
		comments,
		deleteComment,
		createComment,
		isLoadingComments
	} = useArticleInfo();
	const commentsList = comments || [];
	return (
		<main className="h-screen">
			{isLoading ? (
				<Loader />
			) : (
				<>
					{data ? (
						<>
							<Heading type="large">{data.title}</Heading>
							<div>{data.description}</div>
							<div className="flex items-center justify-between  pt-10">
								<span>{data.createdAt && formattedDate(data.createdAt)}</span>
								<Link to="/articles" className="flex items-center">
									{ALL_ARTICLES}
									<img src={rightArrows} className="ml-1" />
								</Link>
							</div>
							<CommentsList
								comments={commentsList?.comments}
								deleteComment={deleteComment}
								createComment={createComment}
								isLoadingComments={isLoadingComments}
							/>
						</>
					) : null}
				</>
			)}
		</main>
	);
};
