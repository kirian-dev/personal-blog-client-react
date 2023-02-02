import { FC, MouseEvent } from 'react';
import { useAction } from '@/common/hooks/useAction';

interface Props {
	toggleDropdown: () => void;
}

export const Logout: FC<Props> = ({ toggleDropdown }) => {
	const { logout } = useAction();

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		logout();
	};
	return (
		<li onClick={toggleDropdown}>
			<a
				onClick={handleLogout}
				className="py-2 px-4 hover:bg-gray-200 block cursor-pointer"
			>
				Logout
			</a>
		</li>
	);
};
