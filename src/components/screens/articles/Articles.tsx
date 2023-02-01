import { READ_MORE } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import { Link } from 'react-router-dom';

export const Articles = () => {
	return (
		<ul className="max-w-3xl">
			<li className="pb-24">
				<span className="pb-4">September 08, 2019</span>
				<Heading type="medium" className="pb-4">
					Code splitting & lazy loading a server side rendered React app
				</Heading>
				<p className="text-large pb-6">
					Reasoning, approach, and goals Goals Faster initial load times. Users
					only download the code they need for the features they are using.
					This…
				</p>
				<Link to="/articles/1">
					<span className="font-[14px]">{READ_MORE}</span>
				</Link>
			</li>
			<li className="pb-24">
				<span className="pb-4">September 08, 2019</span>
				<Heading type="medium" className="pb-4">
					Code splitting & lazy loading a server side rendered React app
				</Heading>
				<p className="text-large pb-6">
					Reasoning, approach, and goals Goals Faster initial load times. Users
					only download the code they need for the features they are using.
					This…
				</p>
				<span className="font-[14px]">{READ_MORE}</span>
			</li>
			<li className="pb-24">
				<span className="pb-4">September 08, 2019</span>
				<Heading type="medium" className="pb-4">
					Code splitting & lazy loading a server side rendered React app
				</Heading>
				<p className="text-large pb-6">
					Reasoning, approach, and goals Goals Faster initial load times. Users
					only download the code they need for the features they are using.
					This…
				</p>
				<span className="font-[14px]">{READ_MORE}</span>
			</li>
			<li className="pb-24">
				<span className="pb-4">September 08, 2019</span>
				<Heading type="medium" className="pb-4">
					Code splitting & lazy loading a server side rendered React app
				</Heading>
				<p className="text-large pb-6">
					Reasoning, approach, and goals Goals Faster initial load times. Users
					only download the code they need for the features they are using.
					This…
				</p>
				<span className="font-[14px]">{READ_MORE}</span>
			</li>
		</ul>
	);
};
