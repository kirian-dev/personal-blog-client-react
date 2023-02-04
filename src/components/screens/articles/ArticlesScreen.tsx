import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Heading } from '@/components/ui/heading';
import { Search } from '@/components/ui/search';
import { Loader } from '@/components/ui/loader';
import { Article } from '@/components/ui/article';
import { ARTICLES_TITLE } from '@/common/constants/content.constant';
import { useArticles } from '@/common/hooks/useArticles';

export const ArticlesScreen: FC = () => {
	const {
		articles,
		handleSearch,
		searchTerm,
		hasNextPage,
		fetchNextPage,
		isLoading,
	} = useArticles();

	return (
		<main className="">
			<Heading type="large" className="">
				{ARTICLES_TITLE}
			</Heading>
			<Search searchTerm={searchTerm} handleSearch={handleSearch} />
			{isLoading ? (
				<Loader />
			) : (
				<InfiniteScroll
					dataLength={articles ? articles?.length : 0}
					next={fetchNextPage}
					hasMore={hasNextPage || false}
					loader={<Loader className='-mt-5'/>}
				>
					{articles?.map(article => (
						<Article key={article._id} article={article} />
					))}
				</InfiniteScroll>
			)}
		</main>
	);
};
