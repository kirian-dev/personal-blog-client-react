import  { FC } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export const TextEditor: FC = () => {
	return (
		<Editor
			wrapperClassName="demo-wrapper"
			editorClassName="demo-editor"
		/>
	);
};
