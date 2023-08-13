import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Count: {count}</p>
      <button
        id="btn"
        data-testid="btn"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default App;
