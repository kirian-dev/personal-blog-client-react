import { useArticles } from '@/common/hooks/useArticles';
import { UseMutationOptions, useMutation } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastError } from '@/common/helpers/toastrError';
import { ArticleService } from '@/services/article/article.service';
import { IArticleCreate } from '@/types/article.interface';

interface DeleteArticleOptions
	extends UseMutationOptions<any, unknown, string, unknown> {
	refetchQueries: string[];
}

export const useEditArticle = ({
	articleId,
	setShowModal,
}: {
	articleId: string | undefined;
	setShowModal: (x: boolean) => void;
}) => {
	const { mutateAsync: deleteArticle } = useMutation(
		'delete article',
		() => ArticleService.delete(articleId),
		{
			onError(error) {
				toastError(error, 'Delete article');
			},
			onSuccess() {
				setShowModal(false);
				toastr.success('Delete article', 'delete was successful');
			},
			refetchQueries: ['articles'],
		} as DeleteArticleOptions
	);

	const { mutateAsync: updateArticle } = useMutation(
		'update article',
		(data: IArticleCreate) => ArticleService.update(articleId, data),
		{
			onError(error) {
				toastError(error, 'Update article');
			},
			onSuccess() {
				setShowModal(false);
				toastr.success('Update article', 'update was successful');
			},
			refetchQueries: ['articles'],
		}
	);
	const { mutateAsync: createArticle } = useMutation(
		'create article',
		(data: IArticleCreate) => ArticleService.create(data),
		{
			onError(error) {
				toastError(error, 'Create article');
			},
			onSuccess() {
				setShowModal(false);
				toastr.success('Create article', 'create was successful');
			},
			refetchQueries: ['articles'],
		}
	);

	return { updateArticle, createArticle, deleteArticle };
};
