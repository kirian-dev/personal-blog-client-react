import { FC } from 'react';

interface Props {
	toggleMenu: () => void;
}

export const MenuButton: FC<Props> = ({ toggleMenu }) => {
	return (
		<div
			className="space-y-2 block sm:hidden cursor-pointer"
			onClick={toggleMenu}
		>
			<div className="w-8 h-0.5 bg-green-500"></div>
			<div className="w-8 h-0.5 bg-green-500"></div>
			<div className="w-8 h-0.5 bg-green-500"></div>
		</div>
	);
};
