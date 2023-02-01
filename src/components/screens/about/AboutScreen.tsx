import {
	ABOUT_CONTENT,
	ABOUT_TITLE,
} from '@/common/constants/content.constant';
import { Heading } from '@/components/ui/heading';

export const AboutScreen = () => {
	return (
		<main className="h-screen">
			<Heading type="large">{ABOUT_TITLE}</Heading>
			<p>{ABOUT_CONTENT}</p>
		</main>
	);
};
