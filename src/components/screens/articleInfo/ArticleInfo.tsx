import { Link } from 'react-router-dom';
import { ALL_ARTICLES } from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';
import rightArrows from '@/assets/chevrons-right.svg';
import { FC } from 'react';

export const ArticleInfo: FC = () => {
	return (
		<main className="">
			<Heading type="large">
				Code splitting & lazy loading a server side rendered React app
			</Heading>
			<p className="font-large" style={{ textIndent: '25px' }}>
				React is a JavaScript library for building user interfaces. It was
				developed and is maintained by Facebook and is widely used for creating
				single-page applications (SPAs) and mobile applications. React was first
				released in 2013 and has since become one of the most popular libraries
				for front-end development.
				<p>
					React uses a virtual DOM, which acts as an intermediary between the
					component's logic and the browser's DOM. This allows React to optimize
					updates and renderings, leading to increased performance and
					responsiveness in applications. With React, developers can write
					components using a declarative syntax, making it easier to understand
					and debug their code. React also has a large and supportive community,
					with a vast ecosystem of tools, libraries, and tutorials. This has
					helped to make React a popular choice among developers, especially for
					those building large, complex applications.
				</p>
				<p>
					One of React's core features is its ability to handle state and props.
					Props are data passed from a parent component to a child component,
					while state is data that is local to a component and can be updated.
					This makes it possible to create dynamic and interactive user
					interfaces. React also supports server-side rendering, which allows
					for improved performance and improved search engine optimization
					(SEO). With server-side rendering, the HTML is generated on the server
					and sent to the browser, reducing the amount of JavaScript needed to
					render the page and providing a faster initial load time for users.
				</p>
				<p>
					In conclusion, React is a powerful and flexible library for building
					user interfaces. Its virtual DOM, declarative syntax, and large
					ecosystem make it a popular choice among developers. Whether building
					a simple website or a complex, data-driven application, React provides
					the tools needed to bring your ideas to life. React Hooks: In 2018,
					React introduced Hooks, a way to add state and other React features to
					functional components. Hooks allow developers to manage state and side
					effects in a clean and reusable way, without having to use class
					components. This has made it even easier to build complex and dynamic
					user interfaces with React. React Native: React Native is a platform
					for building native mobile applications using React. With React
					Native, developers can build apps for iOS and Android with a single
					codebase, which can save time and resources compared to developing
					separate apps for each platform. JSX: React uses JSX, a syntax
					extension for JavaScript, to describe the structure of a component.
					JSX allows developers to write HTML-like code within their JavaScript,
					making it easier to understand and visualize the component structure.
					React Router: React Router is a popular library for managing routing
					in React applications.
				</p>
			</p>
			<div className="flex items-center justify-between  pt-10">
				<span>September 08, 2019</span>
				<Link to="/articles" className="flex items-center">
					{ALL_ARTICLES}
					<img src={rightArrows} className="ml-1" />
				</Link>
			</div>
		</main>
	);
};
