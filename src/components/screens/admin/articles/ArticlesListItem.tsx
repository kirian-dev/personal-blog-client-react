import { FC } from 'react';
import { formattedDate } from '@/common/helpers/formattedDate';
import { IArticle } from '@/types/article.interface';
import { DELETE_TEXT, EDIT_TEXT } from '@/common/constants/content.constant';

interface Props {
	toggleModal: () => void;
	handleClickAction: (x: string, y?: string) => void;
	article: IArticle;
	index: number;
}

export const ArticlesListItem: FC<Props> = ({
	article,
	index,
	handleClickAction,
}) => {
	return (
		<tr className="text-white text-xs md:text-lg">
			<td className="border sm:px-4 py-2">{index + 1}</td>
			<td className="border sm:px-4 py-2">
				{article.createdAt && formattedDate(article.createdAt)}
			</td>
			<td className="border sm:px-4 py-2">{article.title}</td>
			<td className="border sm:px-4 py-2">
				<button
					className="bg-green-400 text-white px-2 py-1 rounded"
					onClick={() => {
						handleClickAction('update', article._id || '');
					}}
				>
					{EDIT_TEXT}
				</button>
				<button
					className="bg-red-700 text-white px-2 py-1 rounded mt-2 ml-1 md:mt-0 sm:ml-2"
					onClick={() => {
						handleClickAction('delete', article._id || '');
					}}
				>
					{DELETE_TEXT}
				</button>
			</td>
		</tr>
	);
};
