import { formattedDate } from '@/common/helpers/formattedDate';
import { IUserState } from '@/store/user/user.interface';
import { IComment } from '@/types/comment.interface';
import { FC } from 'react';
import userIcon from '@/assets/user.png';
interface Props {
	comment: IComment;
	user: IUserState | null;
	deleteComment: (id: string) => void;
}

export const CommentsListItem: FC<Props> = ({
	comment,
	user,
	deleteComment,
}) => {
	return (
		<div className="flex items-start p-4 border-t border-gray-200">
			<div className="w-7 h-7 mr-4">
				<img src={userIcon} alt="" />
			</div>
			<div className="flex-1">
				<div>
					<h4 className="text-sm font-medium text-gray-400 leading-tight">
						{comment.username}
					</h4>
					<p className="text-md leading-tight  mt-2">{comment.body}</p>
					<p className="text-xs text-gray-600 mt-2">
						{comment.createdAt && formattedDate(comment.createdAt)}
					</p>
				</div>
			</div>
			{user?._id === comment.userId && (
				<button
					className="p-2 text-gray-500 hover:text-red-500 focus:outline-none"
					onClick={() => deleteComment(comment._id)}
				>
					<svg
						className="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};
