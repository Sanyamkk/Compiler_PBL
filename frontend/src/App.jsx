import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import ResultsPane from './components/ResultsPane';

function App() {
  const [code, setCode] = useState("int a;\na = 5;\nprint(a);");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompile = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setResults({ errors: [{ phase: "Network", message: "Failed to connect to compile server." }] });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <Header loading={loading} handleCompile={handleCompile} />
      
      <div className="main-content">
        <CodeEditor code={code} setCode={setCode} />
        <ResultsPane results={results} />
      </div>
    </div>
  );
}

export default App;
