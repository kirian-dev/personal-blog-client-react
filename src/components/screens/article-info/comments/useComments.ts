import { ICommentCreate } from '@/types/comment.interface';
import { toastError } from '@/common/helpers/toastrError';
import { ArticleService } from '@/services/article/article.service';
import { useMemo } from 'react';
import { useQuery, useMutation } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useComments = (articleId: string, commentId?: string) => {
	if (!articleId) {
		return {};
	}

	const queryData = useQuery(
		['article', articleId],
		() => {
			return articleId
				? ArticleService.getComments(articleId)
				: Promise.resolve(null);
		},
		{
			onError(error) {
				toastError(error, 'Get article');
			},
		}
	);

	const { mutateAsync: createComment } = useMutation(
		'create comment',
		(data: ICommentCreate) => {
			return articleId
				? ArticleService.createComment(articleId, data)
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
		(data: ICommentCreate) => {
			return articleId && commentId
				? ArticleService.deleteComment(articleId, commentId)
				: Promise.resolve(null);
		},
		{
			onSuccess() {
				toastr.success('Comment deleted', 'deleted was successfully ');
				queryData.refetch();
			},
			onE 
};
