import { Link } from 'react-router-dom';
import { ALL_ARTICLES } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import rightArrows from '@/assets/chevrons-right.svg';
import { FC } from 'react';
import { useArticleInfo } from './useArticleInfo';
import { formattedDate } from '@/common/helpers/formattedDate';
import { Loader } from '@/components/ui/loader';

export const ArticleInfo: FC = () => {
	const { isLoading, data } = useArticleInfo();

	return (
		<main className="">
			{isLoading ? (
				<Loader />
			) : (
				<>
					{data ? (
						<>
							<Heading type="large">{data.title}</Heading>
							<div>{data.description}</div>
							<div className="flex items-center justify-between  pt-10">
								<span>{data.createdAt && formattedDate(data.createdAt)}</span>
								<Link to="/articles" className="flex items-center">
									{ALL_ARTICLES}
									<img src={rightArrows} className="ml-1" />
								</Link>
							</div>
						</>
					) : null}
				</>
			)}
		</main>
	);
};
