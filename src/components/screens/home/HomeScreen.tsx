import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Projects } from './Projects';
import { Heading } from '@/components/ui/heading';
import { useArticles } from '@/common/hooks/useArticles';
import { formattedDate } from '@/common/helpers/formattedDate';
import { Loader } from '@/components/ui/loader';
import {
	ALL_ARTICLES,
	LATEST_ARTICLES,
	WELCOME_HEADING_NAME,
	WELCOME_SUMMARY_TEXT,
} from '@/common/constants/content.constant';
import rightArrows from '@/assets/chevrons-right.svg';
import jsIcon from '@/assets/JavaScript.svg';
const PAGE_LIMIT = 5;

export const HomeScreen: FC = () => {
	const { articles, isLoading } = useArticles(PAGE_LIMIT);

	return (
		<main className="">
			<div className="max-w-3xl">
				<Heading type="large">{WELCOME_HEADING_NAME}</Heading>
				<p className="pt-10 text-lg">{WELCOME_SUMMARY_TEXT}</p>
			</div>
			<section className="pt-24">
				<div className="w-full flex justify-between items-center">
					<Heading type="medium">{LATEST_ARTICLES}</Heading>
					<Link to="/articles" className="flex items-center">
						{ALL_ARTICLES}
						<img src={rightArrows} className="ml-1" />
					</Link>
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<ul className="pt-10 pb-24">
						{articles &&
							articles?.slice(0, 4).map(article => (
								<Link to={`/articles/${article._id}`} key={article._id}>
									<li
										key={article._id}
										className="pb-6 flex items-start cursor-pointer"
									>
										<img src={jsIcon} className="block mr-2 my-1" />
										<div className="flex flex-col">
											<p className="text-lg">{article.title}</p>
											<span>
												{article.createdAt && formattedDate(article.createdAt)}
											</span>
										</div>
									</li>
								</Link>
							))}
					</ul>
				)}
			</section>
			<Projects />
		</main>
	);
};
