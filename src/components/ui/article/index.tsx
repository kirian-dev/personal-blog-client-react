import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../heading';
import { READ_MORE } from '@/common/constants/content.constant';
import { IArticle } from '@/types/article.interface';
import { formattedDate } from '@/common/helpers/formattedDate';

interface Props {
	article: IArticle;
}

export const Article: FC<Props> = ({ article }) => {
	return (
		<li className="pb-24 max-h-60">
			<span className="pb-4">
				{article.createdAt && formattedDate(article.createdAt)}
			</span>
			<Heading type="medium" className="pb-4">
				{article.title}
			</Heading>
			<p className="text-large overflow-hidden pb-6  overflow-ellipsis whitespace-pre">{article.description}</p>
			<Link to={`/articles/${article._id}`}>
				<span className="font-[14px]">{READ_MORE}</span>
			</Link>
		</li>
	);
};
