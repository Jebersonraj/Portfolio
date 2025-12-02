import React from 'react';
import Header from "./components/Header/Header.jsx";
import TopContainer from "./components/TopContainer/TopContainer.jsx";
import Skills from "./components/skills/Skills.jsx";
import ProjectContainer from "./components/project-container/Project-container.jsx";
import "./App.css"
import Education from "./components/Education/Education.jsx";
import Achievements from "./components/Achivements/Achivements.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Joinwithme from "./components/Joinwithme/Joinwithme.jsx";

function App() {
    return (
        <div className="Home">
            <Header/>
            <TopContainer/>
            <Skills/>
            <ProjectContainer/>
            <Education/>
            <Achievements/>
            <Contact/>
            <Joinwithme/>
        </div>
    );
}

export default App;