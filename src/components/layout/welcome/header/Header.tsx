import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import heartImg from '@/assets/heart.svg';
import { HEADER_NAME, SIGNIN_TEXT } from '@/common/constants/content.constant';
import { menuList } from './menu-list';
import { Menu } from './Menu';
import { useAuth } from '@/common/hooks/useAuth';
import { Logout } from './Logout';

export const Header: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const { user } = useAuth();

	const toggleMenu = () => {
		setIsOpenMenu(prev => !prev);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(prev => !prev);
	};
	return (
		<header className="flex w-full pt-14">
			<div className="flex justify-between items-center w-full">
				<div className="flex items-center">
					<Link to="/">
						<img src={heartImg} alt="" className="pr-4" />
					</Link>
					<h3 className="font-bold text-lg">{HEADER_NAME}</h3>
				</div>

				<nav className="hidden sm:flex">
					<ul className="flex items-center">
						{menuList.map((item, index) => (
							<li key={index} className="pr-5">
								<Link to={item.link}>{item.title}</Link>
							</li>
						))}
						{user ? (
							<>
								<li className="cursor-pointer" onClick={toggleDropdown}>
									Profile
								</li>
								<div className="relative transition-all ease-in-out">
									{isDropdownOpen && (
										<ul className="absolute right-0 z-10 mt-4 bg-white text-gray-800 py-2 rounded-lg shadow-lg transition-all w-40">
											{user.roles.includes('admin') && (
												<li onClick={toggleDropdown}>
													<Link
														className="py-2 px-4 hover:bg-gray-200 block"
														to="/admin/panel"
													>
														Admin panel
													</Link>
												</li>
											)}
											<li onClick={toggleDropdown}>
												<Link
													className="py-2 px-4 hover:bg-gray-200 block"
													to="/profile"
												>
													Profile settings
												</Link>
											</li>
											<Logout toggleDropdown={toggleDropdown} />
										</ul>
									)}
								</div>
							</>
						) : (
							<li>
								<Link to="/signin">{SIGNIN_TEXT}</Link>
							</li>
						)}
					</ul>
				</nav>
				<Menu toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
			</div>
		</header>
	);
};
