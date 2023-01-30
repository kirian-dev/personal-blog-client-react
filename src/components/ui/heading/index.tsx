import { FC, ReactNode } from 'react';

interface Props {
	type: string;
	className?: string;
	children: ReactNode;
}

export const Heading: FC<Props> = ({ type, className, children }) => {
	if (type === 'large') {
		return <h1 className={className}>{children}</h1>;
	}

	if (type === 'medium') {
		return <h2 className={className}>{children}</h2>;
	}

	return <></>;
};
