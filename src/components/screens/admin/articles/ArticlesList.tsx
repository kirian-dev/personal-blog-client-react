import { FC } from 'react';
import { ARTICLES_TITLE } from '@/common/constants/content.constant';
import { useArticles } from '@/common/hooks/useArticles';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';
import { Search } from '@/components/ui/search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArticlesListItem } from './ArticlesListItem';
import { Button } from '@/components/ui/button';

const PAGE_LIMIT = 20;

export const ArticlesList: FC<{
	toggleModal: () => void;
	handleClickAction: (x: string, y?: string) => void;
}> = ({ toggleModal, handleClickAction }) => {
	const {
		articles,
		handleSearch,
		searchTerm,
		hasNextPage,
		fetchNextPage,
		isLoading,
	} = useArticles(PAGE_LIMIT);

	return (
		<main className="">
			<Heading type="large" className="text-3xl">
				{ARTICLES_TITLE}
			</Heading>
			<div className="flex items-center justify-between">
				<Search searchTerm={searchTerm} handleSearch={handleSearch} />
				<Button
					className="mb-10 px-4"
					onClick={() => handleClickAction('create')}
				>
					Create article
				</Button>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<InfiniteScroll
					dataLength={articles ? articles?.length : 0}
					next={fetchNextPage}
					hasMore={hasNextPage || false}
					loader={isLoading ? <Loader /> : <div></div>}
				>
					<table className="table-auto w-full">
						<thead>
							<tr className="bg-gray-800 text-white">
								<th className="sm:px-4 py-2">#</th>
								<th className="sm:px-4 py-2">Created At</th>
								<th className="sm:px-4 py-2">Title</th>
								<th className="sm:px-4 py-2">Actions</th>
							</tr>
						</thead>
						<tbody className="">
							{articles.length ? (
								articles?.map((article, index) => (
									<ArticlesListItem
										key={article._id}
										article={article}
										index={index}
										toggleModal={toggleModal}
										handleClickAction={handleClickAction}
									/>
								))
							) : (
								<>
									<div className="flex justify-between items-center w-full mt-4">
										Articles not found
									</div>
								</>
							)}
						</tbody>
					</table>
				</InfiniteScroll>
			)}
		</main>
	);
};
