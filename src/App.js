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
import Code12 from './Notes/part2/7.note';
import Code13 from './Notes/part2/8.note';
import Code14 from './Notes/part2/9.note';

function App() {
  console.log('Heloo')
  return (
    <div className='App'>
      <HomePage />
      <Code14/>
    </div>
  );
}

export default App;
