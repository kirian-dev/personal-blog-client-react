import {
	ALL_ARTICLES,
	LATEST_ARTICLES,
	WELCOME_HEADING_NAME,
	WELCOME_SUMMARY_TEXT,
} from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { FC } from 'react';
import rightArrows from '@/assets/chevrons-right.svg';
import jsIcon from '@/assets/JavaScript.svg';
import { Projects } from './Projects';
import { Link } from 'react-router-dom';
export const HomeScreen: FC = () => {
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
				<ul className="pt-10 pb-24">
					<li className="pb-6 flex items-start cursor-pointer">
						<img src={jsIcon} className="block mr-2 my-1" />
						<div className="flex flex-col">
							<p className="text-lg">
								Reducing cognitive load by theming my tools
							</p>
							<span>September 08, 2019</span>
						</div>
					</li>
					<li className="pb-6 flex items-start">
						<img src={jsIcon} className="block mr-2 my-1" />
						<div className="flex flex-col">
							<p className="text-lg">
								Reducing cognitive load by theming my tools
							</p>
							<span>September 08, 2019</span>
						</div>
					</li>
					<li className="pb-6 flex items-start">
						<img src={jsIcon} className="block mr-2 my-1" />
						<div className="flex flex-col">
							<p className="text-lg">
								Reducing cognitive load by theming my tools
							</p>
							<span>September 08, 2019</span>
						</div>
					</li>
				</ul>
			</section>
			<Projects />
			
		</main>
	);
};
