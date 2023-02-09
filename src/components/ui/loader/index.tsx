import { FC } from 'react';

export const Loader: FC<{ className?: string }> = ({ className }) => {
	const circleCommonClasses = 'h-10 w-10 bg-green-400 rounded-full ';

	return (
		<div
			className={`flex container h-screen justify-start md:justify-center  items-start max-w-screen-lg mt-24 ${className}`}
			style={{ width: '1024px' }}
		>
			<div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
			<div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
			<div className={`${circleCommonClasses} animate-bounce400`}></div>
		</div>
	);
};
