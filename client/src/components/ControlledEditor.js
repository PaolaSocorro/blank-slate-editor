import React, { Component, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class ControlledEditor extends Component {
  // The constructor for a React component is called before it is mounted. 
  // https://reactjs.org/docs/react-component.html#constructor
  constructor(props) {
    // calling super(props) defines this.props for later use
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  // arrow function expression 
  // onEditorStateChange is the function name
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return(
      <Editor 
      editorState={editorState}
      onEditorStateChange={this.onEditorStateChange}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class">
    </Editor>
    )
  }
}

export default ControlledEditor
