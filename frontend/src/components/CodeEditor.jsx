import React from 'react';

function CodeEditor({ code, setCode }) {
  return (
    <div className="editor-pane pane">
      <h2>Source Code</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="code-editor"
        spellCheck="false"
      />
    </div>
  );
}

export default CodeEditor;
