import { FC } from 'react';

import { useArticles } from '../../../common/hooks/useArticles';
import { ARTICLES_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { Search } from '@/components/ui/search';
import { Loader } from '@/components/ui/loader';
import { Article } from '@/components/ui/article';

export const ArticlesScreen: FC = () => {
	const { data, isLoading, searchTerm, handleSearch } = useArticles();
	return (
		<main className="h-full">
			<Heading type="large" className="">
				{ARTICLES_TITLE}
			</Heading>
			<Search searchTerm={searchTerm} handleSearch={handleSearch} />
			{isLoading ? (
				<Loader />
			) : (
				<>
					{data?.articles && data.articles.length > 0 ? (
						<ul className="max-w-3xl">
							{data.articles.map(article => (
								<Article key={article._id} article={article} />
							))}
						</ul>
					) : (
						<div className="flex  items-center mt-10">
							Articles not found
						</div>
					)}
				</>
			)}
		</main>
	);
};
