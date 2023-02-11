import { FC, useState } from 'react';
import { ArticlesList } from './articles';
import { UsersList } from './users';
import { ArticleForm } from './articles/article-form';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Modal } from '@/components/ui/modal';
import {
	ADMIN_PANEL_TITLE,
	ARTICLES_TITLE,
	USERS_TEXT,
} from '@/common/constants/content.constant';

export const AdminPanelScreen: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [typeAction, setTypeAction] = useState<string>('create');
	const [selectedArticle, setSelectedArticle] = useState<string | undefined>(
		''
	);
	const [isShowContent, setIsShowContent] = useState<{
		users: boolean;
		articles: boolean;
	}>({
		users: false,
		articles: true,
	});

	const toggleShowContent = (type: string) => {
		if (type === 'articles') {
			setIsShowContent({ articles: true, users: false });
		}

		if (type === 'users') {
			setIsShowContent({ articles: false, users: true });
		}
	};
	const handleClickAction = (action: string, id?: string) => {
		if (action === 'create') {
			setTypeAction('create');
			toggleModal();
		}
		if (action === 'update') {
			setTypeAction('update');
			setSelectedArticle(id);
			toggleModal();
		}
		if (action === 'delete') {
			setTypeAction('delete');
			setSelectedArticle(id);
			toggleModal();
		}
	};
	const toggleModal = () => {
		setShowModal(prev => !prev);
	};
	return (
		<main className="">
			<Heading type="large" className="">
				{ADMIN_PANEL_TITLE}
			</Heading>
			<div className="flex">
				<Button
					className="px-4 mr-5"
					onClick={() => toggleShowContent('articles')}
				>
					{ARTICLES_TITLE}
				</Button>
				<Button className="px-4" onClick={() => toggleShowContent('users')}>
					{USERS_TEXT}
				</Button>
			</div>
			{isShowContent.articles && (
				<ArticlesList
					toggleModal={toggleModal}
					handleClickAction={handleClickAction}
				/>
			)}
			{isShowContent.users && <UsersList />}
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				content={
					<ArticleForm
						id={selectedArticle}
						type={typeAction}
						setShowModal={setShowModal}
					/>
				}
				title={'Article form'}
			/>
		</main>
	);
};
