import { ArticleService } from '@/services/article/article.service';
import { useDebounce } from './useDebounce';
import { useState, ChangeEvent, useMemo, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { toastError } from '@/common/helpers/toastrError';
import { IArticlesResponse, IArticle } from '@/types/article.interface';

const PAGE_LIMIT = 5;

export const useArticles = (): {
	articles: IArticle[] | null | undefined;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	searchTerm: string;
	hasNextPage: boolean | undefined;
	fetchNextPage: () => void;
	isLoading: boolean;
} => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
		['articles list', debouncedSearch],
		async ({ pageParam = 1 }) =>
			ArticleService.getArticles(debouncedSearch, PAGE_LIMIT, pageParam),
		{
			getNextPageParam: (lastPage: IArticlesResponse) => {
				if (
					lastPage.meta &&
					lastPage.meta.currPage === lastPage.meta.pageCount
				) {
					return null;
				}
				return lastPage.meta ? lastPage.meta.currPage + 1 : 2;
			},
			onError: () => {
				toastError('Failed to fetch articles');
			},
		}
	);

	const articles = useMemo(() => {
		return data && Array.isArray(data.pages)
			? data.pages.reduce(
					(acc: IArticle[], page: IArticlesResponse) => [
						...acc,
						...page.articles,
					],
					[]
			  )
			: [];
	}, [data]);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return {
		articles,
		handleSearch,
		searchTerm,
		hasNextPage,
		fetchNextPage,
		isLoading,
	};
};
