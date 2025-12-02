import React from 'react';
import Header from "./components/Header/Header.jsx";
import TopContainer from "./components/TopContainer/TopContainer.jsx";
import Skills from "./components/skills/skills.jsx";
import ProjectContainer from "./components/project-container/project-container.jsx";
import "./App.css"
import Education from "./components/Education/Education.jsx";
import Achievements from "./components/Achivements/achivements.jsx";

function App() {
    return (
        <div className="Home">
            <Header/>
            <TopContainer/>
            <Skills/>
            <ProjectContainer/>
            <Education/>
            <Achievements/>
        </div>
    );
}

export default App;