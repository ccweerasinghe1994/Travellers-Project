import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.page";
import Code17 from "./Notes/part3/note17.note";

function App() {
  console.log('Heloo')
  return (
    <div className='App'>
      <HomePage />
      <Code17/>
    </div>
  );
}

export default App;
