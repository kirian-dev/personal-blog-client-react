import {
	PROJECTS_TITLE,
	PROJECTS_NAME_FIRST,
	PROJECTS_DESCRIPTION_FIRST,
} from '@/common/constants/content.constant';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';

export const Projects = () => {
	return (
		<section className="w-full">
			<Heading type="medium" className="pb-6">
				{PROJECTS_TITLE}
			</Heading>
			<div className="project flex flex-col mb-4">
				<Heading type="medium" className="font-medium pb-4">
					{PROJECTS_NAME_FIRST}
				</Heading>
				<p className="font-normal pb-10">{PROJECTS_DESCRIPTION_FIRST}</p>
				<Button className="">Check me</Button>
			</div>
			<div className='flex flex-col sm:flex-row gap-x-5'>
				<div className="project flex flex-col">
					<Heading type="medium" className="font-medium pb-4">
						{PROJECTS_NAME_FIRST}
					</Heading>
					<p className="font-normal pb-10">{PROJECTS_DESCRIPTION_FIRST}</p>
					<Button className="">Check me</Button>
				</div>
				<div className="project flex flex-col mt-4 sm:m-0">
					<Heading type="medium" className="font-medium pb-4">
						{PROJECTS_NAME_FIRST}
					</Heading>
					<p className="font-normal pb-10">{PROJECTS_DESCRIPTION_FIRST}</p>
					<Button className="">Check me</Button>
				</div>
			</div>
		</section>
	);
};
