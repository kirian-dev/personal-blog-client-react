import { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FOOTER_CONTENT } from '@/common/constants/content.constant';
export const Footer: FC = () => {
	return (
		<footer className="pt-24 pb-14 max-w-3xl mx-auto">
			<p className="text-lg text-center">{FOOTER_CONTENT}</p>
			<div className="flex justify-center mt-5">
				<a
					href="https://github.com/kirian-dev"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white mx-4"
				>
					<FaGithub size={32} />
				</a>
				<a
					href="https://www.linkedin.com/in/kirill-polozenko-433051a1/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white mx-4"
				>
					<FaLinkedin size={32} />
				</a>
			</div>
		</footer>
	);
};
