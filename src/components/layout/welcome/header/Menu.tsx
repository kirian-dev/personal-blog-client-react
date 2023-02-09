import { FC, useEffect, useRef } from 'react';
import { menuList } from './menu-list';
import { Link } from 'react-router-dom';
import { MenuButton } from '@/components/ui/menu-button';
import { IUserState } from '@/store/user/user.interface';
import { SIGNIN_TEXT } from '@/common/constants/content.constant';
import { Logout } from './Logout';

interface Props {
	isOpenMenu: boolean;
	toggleMenu: () => void;
	toggleDropdown: () => void;
	user: IUserState | null;
}

export const Menu: FC<Props> = ({
	isOpenMenu,
	toggleMenu,
	toggleDropdown,
	user,
}) => {
	return (
		<>
			<MenuButton toggleMenu={toggleMenu} />
			<ul className={`menu md:hidden ${isOpenMenu ? 'menu-active' : ''}`}>
				{menuList.map((item, index) => (
					<li key={index} onClick={toggleMenu} className="w-full">
						<Link
							to={item.link}
							className="py-2 px-4 block menu-link hover:bg-gray-200 w-full"
						>
							{item.title}
						</Link>
					</li>
				))}
				{user ? (
					<>
						{user.roles.includes('admin') && (
							<li onClick={toggleMenu} className="w-full">
								<Link
									className="py-2 px-4 hover:bg-gray-200 block menu-link"
									to="/admin/panel"
								>
									Admin panel
								</Link>
							</li>
						)}
						<li onClick={toggleMenu} className="w-full">
							<Link
								className="py-2 px-4 hover:bg-gray-200 block menu-link"
								to="/profile"
							>
								Profile settings
							</Link>
						</li>
						<Logout toggleDropdown={toggleMenu} />
					</>
				) : (
					<li className="className='w-full" onClick={toggleMenu}>
						<Link
							className="py-2 px-4 hover:bg-gray-200 block menu-link"
							to="/signin"
						>
							{SIGNIN_TEXT}
						</Link>
					</li>
				)}
			</ul>
		</>
	);
};
