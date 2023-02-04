import { ArticleService } from '@/services/article/article.service';
import { useState, useEffect } from 'react';

const PAGE_LIMIT = 10;

export const usePagination = (: number, searchTerm: string,  ) => {
	const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isLoadingMore
		)
			return;
		setIsLoadingMore(true);
		loadMoreArticles();
	};

	const loadMoreArticles = async () => {
		const nextPage = page + 1;
		const response = await ArticleService.getArticles(
			searchTerm,
			PAGE_LIMIT,
			nextPage
		);
		setPage(nextPage);
		setData(prevData => ({
			articles: [...prevData.articles, ...response.articles],
			meta: response.meta,
		}));
		setIsLoadingMore(false);
	};
};
