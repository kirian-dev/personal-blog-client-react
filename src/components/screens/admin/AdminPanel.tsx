import { ADMIN_PANEL_TITLE } from '@/common/constants/content.constant';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { FC, useState } from 'react';
import { CreateArticle } from './create-article';

export const AdminPanelScreen: FC = () => {
	const [isShowContent, setIsShowContent] = useState<{
		users: boolean;
		createArticle: boolean;
	}>({
		users: false,
		createArticle: true,
	});
	const toggleShowContent = (type: string) => {
		if (type === 'createArticle') {
			setIsShowContent({
				...isShowContent,
				createArticle: !isShowContent.createArticle,
			});
		}

		if (type === 'users') {
			setIsShowContent({ ...isShowContent, users: !isShowContent.users });
		}
	};
	return (
		<main className="h-screen">
			<Heading type="large" className="">
				{ADMIN_PANEL_TITLE}
			</Heading>
			<div className="flex">
				<Button
					className="px-4 mr-5"
					onClick={() => toggleShowContent('createArticle')}
				>
					Create article
				</Button>
				<Button className="px-4" onClick={() => toggleShowContent('users')}>
					Check users
				</Button>
			</div>
			{isShowContent.createArticle && <CreateArticle />}
		</main>
	);
};
