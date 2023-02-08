import { useMemo } from 'react';
import { toastError } from '@/common/helpers/toastrError';
import { ArticleService } from '@/services/article/article.service';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ICommentCreate } from '@/types/comment.interface';
import { toastr } from 'react-redux-toastr';

export const useArticleInfo = () => {
	const { id } = useParams();

	const queryData = useQuery(
		['article', id],
		() => {
			return id ? ArticleService.byId(id) : Promise.resolve(null);
		},
		{
			onError(error) {
				toastError(error, 'Get article');
			},
		}
	);

	const { data: comments, isLoading: isLoadingComments } = useQuery(
		['comments', id],
		() => {
			return id ? ArticleService.getComments(id) : Promise.resolve(null);
		},
		{
			onError(error) {
				toastError(error, 'Get comments');
			},
		}
	);

	const { mutateAsync: createComment } = useMutation(
		'create comment',
		(data: ICommentCreate) => {
			return id
				? ArticleService.createComment(id, data)
				: Promise.resolve(null);
		},
		{
			onSuccess() {
				toastr.success('Comment created', 'created was successfully ');
				queryData.refetch();
			},
			onError(error) {
				toastError(error, 'Create comment');
			},
		}
	);
	const { mutateAsync: deleteComment } = useMutation(
		'delete comment',
		(commentId: string) => {
			return id && commentId
				? ArticleService.deleteComment(id, commentId)
				: Promise.resolve(null);
		},
		{
			onSuccess() {
				toastr.success('Comment deleted', 'deleted was successfully ');
			},
			onError(error) {
				toastError(error, 'Create comment');
			},
		}
	);

	return useMemo(
		() => ({
			...queryData,
			comments,
			isLoadingComments,
			deleteComment,
			createComment,
		}),
		[queryData]
	);
};
