import { FC } from 'react';

export const GlobalLoader: FC = () => {
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<div className="w-16 h-16 border-t-2 border-green-500 rounded-full animate-spin"></div>
		</div>
	);
};
