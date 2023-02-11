import  { FC } from 'react';
import { Editor } from 'react-draft-wysiwyg';

export const TextEditor: FC = () => {
	return (
		<Editor
			wrapperClassName="demo-wrapper"
			editorClassName="demo-editor"
		/>
	);
};
