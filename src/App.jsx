import React from 'react';
import Header from "./components/Header/Header.jsx";
import TopContainer from "./components/TopContainer/TopContainer.jsx";
import Skills from "./components/skills/skills.jsx";


function App() {
    return (
        <div className="Home">
            <Header/>
            <TopContainer/>
            <Skills/>
        </div>
    );
}

export default App;