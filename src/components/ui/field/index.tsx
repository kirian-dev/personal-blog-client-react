import { FC, FocusEvent } from 'react';
import { InputHTMLAttributes } from 'react';
import { Error } from '../error';

interface Props {
	size?: 'sm' | 'md' | 'lg';
	error?: string;
	success?: boolean;
	color?: string | undefined;
	outline: boolean | undefined;
	placeholder: string | undefined;
	value?: string | undefined;
	onChange?: (event: InputHTMLAttributes<HTMLInputElement>) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	labelText: string | undefined;
	name: string;
	type: string | undefined;
	className?: string;
}

export const Field: FC<Props> = ({
	color = 'light-blue',
	size = 'md',
	outline = false,
	placeholder,
	error,
	success,
	value,
	onChange,
	onBlur,
	labelText,
	name,
	type = 'text',
	className,
	...rest
}) => {
	return (
		<>
			<div className="mb-4">
				<label className="block mb-2 font-medium label">{labelText}</label>
				<input
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					className={`w-full appearance-none border border-${
						outline ? color : 'gray-400'
					} rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						error ? 'border-danger' : ''
					} ${success ? 'border-success' : ''} ${className}`}
					{...rest}
				/>
				{error && <Error>{error}</Error>}
				{success && <p className="text-success text-sm">{success}</p>}
			</div>
		</>
	);
};
