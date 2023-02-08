import { FC, useEffect, useRef } from 'react';
import { menuList } from './menu-list';
import { Link } from 'react-router-dom';
import { MenuButton } from '@/components/ui/menu-button';

interface Props {
	isOpenMenu: boolean;
	toggleMenu: () => void;
}

export const Menu: FC<Props> = ({ isOpenMenu, toggleMenu }) => {

	return (
		<>
			<MenuButton toggleMenu={toggleMenu} />
			<ul
				className={`menu md:hidden ${
					isOpenMenu
						? 'menu-active z-50 mt-2 w-56 origin-top-right  shadow-lg  focus:outline-none'
						: ''
				}`}
			>
				{menuList.map((item, index) => (
					<li key={index} onClick={toggleMenu} className="w-full">
						<Link to={item.link} className="m-3 block ">
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
