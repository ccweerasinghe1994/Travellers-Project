import React from 'react';
import HomePage from "./Pages/HomePage/HomePage.page";
import Code18 from "./Notes/part3/note18.note";
import Code19 from "./Notes/part3/note19.note";
import Code20 from "./Notes/part3/note20.note";
import About from "./Pages/About/about.page";

function App() {
  console.log('Heloo')
  return (
    <div className='App'>
      <HomePage />
      <About/>

    </div>
  );
}

export default App;
