import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={`button ${className}`} {...rest}>
			{children}
		</button>
	);
};
