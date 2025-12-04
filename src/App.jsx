import React from 'react';
import Header from "./components/Header/Header.jsx";
import TopContainer from "./components/TopContainer/TopContainer.jsx";
import Skills from "./components/skills/Skills.jsx";
import ProjectContainer from "./components/project-container/Project-container.jsx";
import Education from "./components/Education/Education.jsx";
import Achievements from "./components/Achivements/Achivements.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Joinwithme from "./components/Joinwithme/Joinwithme.jsx";
import "./App.css"

function App() {
    return (
        <div className="Home">
            <Header/>
            <TopContainer/>
            <div className="section-layer-top">
                <Skills/>
            </div>
            <div className="section-layer-bottom">
                <ProjectContainer/>
            </div>
            <div className="section-layer-top">
                <Education/>
            </div>
            <div className="section-layer-bottom">
                <Achievements/>
            </div>
            <div className="section-layer-top">
                <Contact/>
            </div>
            <div className="section-layer-bottom">
                <Joinwithme/>
            </div>
        </div>
    );
}

export default App;