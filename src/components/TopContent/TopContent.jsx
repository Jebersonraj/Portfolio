import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css"

function TopContent() {
    return (
        <div className="top-content">
            <div className="container">
                <h1>Jeberson raj</h1>
                <p>Software Develop<span>er</span></p>
                <div className='btn-row'>
                    <a href="https://drive.google.com/file/d/1knhDrd0BUOLPdm0LFvTrOD1eyFaXt_rV/view?usp=sharing">
                        <button className="cv-btn">CV
                            <span className="icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" stroke="currentColor" strokeWidth="2"
                                      fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        </button>

                    </a>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="work-btn">
                            <div className="svg-wrapper">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"
                                          strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span>Works</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopContent;