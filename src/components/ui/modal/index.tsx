import { FC, ReactNode } from 'react';

interface Props {
	showModal: boolean;
	setShowModal: (x: boolean) => void;
	title?: string;
	content?: ReactNode;
	submit?: () => void;
}

export const Modal: FC<Props> = ({
	showModal,
	setShowModal,
	title,
	content,
}) => {
	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none modal-wrapper">
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">{title}</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none z-10">
											×
										</span>
									</button>
								</div>
								{content && <div className="p-5 modal-body">{content}</div>}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
