import React from 'react';
import HomePage from "./Pages/HomePage/HomePage.page";
import About from "./Pages/About/about.page";
import Features from "./Pages/features/features.page";

import Tours from "./Pages/tours/tours.page";
import Code22 from "./Notes/part3/note22.note";
import Stories from "./Pages/Stories/stories.page";

function App() {
    console.log('Heloo')
    return (
        <div className='App'>
            <HomePage/>
            <main>
                <About/>
                <Features/>
                <Tours/>
                <Stories/>
            </main>
            
        </div>
    );
}

export default App;
