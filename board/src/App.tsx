import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 보드 리스트 상태
  // Array<Board>
  // key?
  
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' placeholder='board name'></input>
        <button onClick={() => { /* */}}>add board</button>
      </header>
      <div className = "Board-List">
        <div>board-1</div>
      </div>
      <div className = "Single-Board">
      </div>
    </div>
  );
}

export default App;