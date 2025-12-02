import React from 'react';
import {Element} from "react-scroll";
import Project from "../project/Project.jsx";
import "./Project-container.css"

function ProjectContainer() {

    const projects = [
        {
            name:"Smart Allot",
            des:"Smart venue allocation system with RFID attendance system.",
            link:"https://github.com/Jebersonraj/cawnpore-builds-excellence-main",
            img:"/smartallot.png",
        },
        {
            name:"Mask and Master",
            des:"A open source skill swapping platform.",
            link:"https://github.com/Jebersonraj/skill-swap-platform",
            img:"/maskandmaster.png",
        },
        {
            name:"Customer Churn prediction",
            des:"Predicts the likelihood of a customer leaving and explains the factors influencing that prediction using  SHAP values.",
            link:"https://github.com/Jebersonraj/Customer-Churn-Prediction",
            img:"/customerchurn.png",
        },
        {
            name:"Cawnpore Engineering and Construction",
            des:"Cawnpore Engineering and Construction is a website of a construction which hightlight the service and project of cawnpore engineering.",
            link:"https://github.com/Jebersonraj/cawnpore-builds-excellence-main",
            img:"/cawnpore.png",
        },
        {
            name:"Heritage Hub",
            des:"Heritage Hub offers Museum and Exhibition tickets in your city.",
            link:"https://github.com/Jebersonraj/Heritage-Hub",
            img:"/heritage.png",
        },
        {
            name:"Unsent",
            des:"Platform to share the unsent message from your heart.",
            link:"https://github.com/Jebersonraj/unsent",
            img:"/unsent.png",
        }
    ]

    return (
        <Element className="project-container" name="projects">
            <h1>My Works💻</h1>
            <div className="project-container-inner">
                {
                    projects.map((project,index)=>{
                        return(
                            <Project key={index} img={project.img} desc={project.des} title={project.name} link={project.link}/>
                        )
                    })
                }
            </div>
        </Element>
    );
}

export default ProjectContainer;