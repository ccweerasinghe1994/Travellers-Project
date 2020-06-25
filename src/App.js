import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.page";
import Note5 from "./Notes/5.note";
import Code6 from './Notes/part2/1.note';
import Code7 from './Notes/part2/2.note';
import Code8 from './Notes/part2/3.note';
import Code9 from './Notes/part2/4.note';
import Code10 from './Notes/part2/5.note';
import Code11 from './Notes/part2/6.note';

function App() {
  console.log('Heloo')
  return (
    <div className='App'>
      <HomePage />
      <Code11/>
    </div>
  );
}

export default App;
