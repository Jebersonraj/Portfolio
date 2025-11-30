import React from 'react';
import {Link} from "react-scroll";
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <div className="Header-left">
                <h1><span>Jeb's</span> Portfolio</h1>
            </div>
            <div className="Header-right">
                <Link to="about" smooth={true} duration={500}>
                    <h4>About</h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    <h4>Project</h4>
                </Link>
                <Link to="education" smooth={true} duration={500}>
                    <h4>Education</h4>
                </Link>
                <Link to="achievements" smooth={true} duration={500}>
                    <h4>Achievement</h4>
                </Link>
                <h5 className="header-btn">
                    Join with me
                    <span className="icon">
                        <svg viewBox="0 0 512 512">
                            <path d="M320 128L448 256 320 384"/>
                            <path d="M448 256H64"/>
                        </svg>
                    </span>
                </h5>

            </div>
        </div>
    );
}

export default Header;