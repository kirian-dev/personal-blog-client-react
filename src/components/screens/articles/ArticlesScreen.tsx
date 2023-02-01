import { ARTICLES_TITLE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { FC } from 'react';
import { Articles } from './Articles';
import { Search } from '@/components/ui/search';

export const ArticlesScreen: FC = () => {
	return (
		<main className="h-full">
			<Heading type="large" className="">
				{ARTICLES_TITLE}
			</Heading>
			<Search searchTerm="" handleSearch={() => console.log('s')} />
			<Articles />
		</main>
	);
};
