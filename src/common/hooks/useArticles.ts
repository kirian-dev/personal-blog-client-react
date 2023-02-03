import { IArticle } from '@/types/article.interface';
import { ArticleService } from '@/services/article/article.service';
import { useDebounce } from './useDebounce';
import { useState, ChangeEvent, useMemo } from 'react';
import { useQuery } from 'react-query';
import { toastError } from '@/common/helpers/toastrError';
export const useArticles = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debounceSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['articles list', debounceSearch],
		() => ArticleService.getArticles(debounceSearch),
		{
			select: data => ({
        articles: data.articles.map((article: IArticle) => ({
          _id: article._id,
          title: article.title,
          description: article.description,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
          comments: article.comments,
        })),
        meta: data.meta,
      }),
			onError(error) {
				toastError(error, 'article list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
		}),
		[queryData, searchTerm]
	);
};
