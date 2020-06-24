import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.page";
import Note2 from "./Notes/2.note";

function App() {
  console.log('Heloo')
  return (
    <div className="App">
      <HomePage/>
      <Note2/>
    </div>
  );
}

export default App;
