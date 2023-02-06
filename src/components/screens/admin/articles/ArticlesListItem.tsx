import { formattedDate } from '@/common/helpers/formattedDate';
import { IArticle } from '@/types/article.interface';
import { FC } from 'react';

interface Props {
	toggleModal: () => void;
	handleClickAction: (x: string, y?: string) => void;
	article: IArticle;
	index: number;
}

export const ArticlesListItem: FC<Props> = ({
	article,
	index,
	toggleModal,
	handleClickAction,
}) => {
	return (
		<tr className="text-white">
			<td className="border px-4 py-2">{index + 1}</td>
			<td className="border px-4 py-2">
				{article.createdAt && formattedDate(article.createdAt)}
			</td>
			<td className="border px-4 py-2">{article.title}</td>
			<td className="border px-4 py-2">
				<button
					className="bg-green-400 text-white px-2 py-1 rounded"
					onClick={() => {
						handleClickAction('update', article._id || '');
					}}
				>
					Edit
				</button>
				<button
					className="bg-red-700 text-white px-2 py-1 rounded ml-2"
					onClick={() => {
						handleClickAction('delete', article._id || '');
					}}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};
