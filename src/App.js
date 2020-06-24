import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.page";
import Note5 from "./Notes/5.note";

function App() {
  console.log('Heloo')
  return (
    <div className="App">
      <HomePage/>
    <Note5/>
    </div>
  );
}

export default App;
