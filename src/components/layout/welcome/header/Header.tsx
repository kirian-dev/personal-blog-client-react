import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import heartImg from '@/assets/heart.svg';
import { HEADER_NAME } from '@/common/constants/content.constant';
import { menuList } from './menu-list';
import { Menu } from './Menu';

export const Header: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const toggleMenu = () => {
		setIsOpenMenu((prev) => !prev);
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
							<li key={index} className="pr-5 last:pr-0">
								<Link to={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</nav>
				<Menu toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
			</div>
		</header>
	);
};
