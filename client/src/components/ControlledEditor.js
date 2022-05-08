import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// Controlled Editor is a functional component that makes use of the state hook (useState)
// 
// https://reactjs.org/docs/hooks-state.html
// https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/
// https://www.javatpoint.com/react-controlled-vs-uncontrolled-component
const ControlledEditor = () => {
    // New state variables to hold state value and to update it
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <Editor 
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class">
      </Editor>
    );
}

export default ControlledEditor