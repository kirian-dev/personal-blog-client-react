import { useMemo } from 'react';
import { toastError } from '@/common/helpers/toastrError';
import { ArticleService } from '@/services/article/article.service';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

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
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	);
};
