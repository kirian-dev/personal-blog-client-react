import { FC } from 'react';
import { MetaTitle } from '../../helmet';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
	children?: JSX.Element;
	title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<div className="container max-w-screen-lg m-auto px-4 xl:px-6 min-h-screen">
			<MetaTitle title={title} />
			<Header />
			<div className="">{children}</div>
			<Footer />
		</div>
	);
};
