import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

import ControlledEditor from './components/ControlledEditor';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Editor Example
      </header>
      <ControlledEditor/>
    </div>
  )
}

export default App;