import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Heading } from '@/components/ui/heading';
import { Search } from '@/components/ui/search';
import { Loader } from '@/components/ui/loader';
import { Article } from '@/components/ui/article';
import { ARTICLES_TITLE } from '@/common/constants/content.constant';
import { useArticles } from '@/common/hooks/useArticles';

const PAGE_LIMIT = 5;

export const ArticlesScreen: FC = () => {
	const {
		articles,
		handleSearch,
		searchTerm,
		hasNextPage,
		fetchNextPage,
		isLoading,
	} = useArticles(PAGE_LIMIT);

	return (
		<main className="flex flex-col">
			<Heading type="large" className="">
				{ARTICLES_TITLE}
			</Heading>
			<Search searchTerm={searchTerm} handleSearch={handleSearch} />
			{isLoading ? (
				<Loader className="mx-auto" />
			) : (
				<>
					{!!articles.length ? (
						<InfiniteScroll
							dataLength={articles ? articles?.length : 0}
							next={fetchNextPage}
							hasMore={hasNextPage || false}
							loader={<Loader className="mt-5" />}
						>
							{articles?.map(article => (
								<Article key={article._id} article={article} />
							))}
						</InfiniteScroll>
					) : (
						<Heading type="medium" className="h-screen mt-4">
							Articles not found
						</Heading>
					)}
				</>
			)}
		</main>
	);
};
