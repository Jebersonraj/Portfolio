import React from 'react';
import {Element} from 'react-scroll'
import TopContent from "../TopContent/TopContent.jsx";
import "./TopContainer.css";

function TopContainer() {
    return (
       <Element name="about" className="top-container">
           <TopContent/>
       </Element>
    );
}

export default TopContainer;