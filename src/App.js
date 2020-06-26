import React from 'react';
import HomePage from "./Pages/HomePage/HomePage.page";
import About from "./Pages/About/about.page";
import Features from "./Pages/features/features.page";
import Code31 from "./Notes/part3/note21.note";

function App() {
    console.log('Heloo')
    return (
        <div className='App'>
            <HomePage/>
            <main>
                <About/>
                <Features/>
            </main>

        </div>
    );
}

export default App;
