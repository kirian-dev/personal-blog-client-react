import { Heading } from '@/components/ui/heading';
import { CreateArticleForm } from './CreateArticleForm';

export const CreateArticle = () => {
	return (
		<div className="flex justify-center items-center flex-col my-10">
			<Heading type="medium" className='my-10'>Create Article Form</Heading>
			<CreateArticleForm />
		</div>
	);
};
