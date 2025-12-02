import React from "react";
import { Element } from "react-scroll";
import "./Education.css";

function Education() {
    return (
        <Element name="education">
            <div className="education-wrapper">
                <h1 className="education-title">Education</h1>
                <section className="education-section">
                    <div className="education-left">
                        <img src="/education.png" alt="Education" />
                    </div>
                    <div className="education-right">
                        <div className="education-card">
                            <p>2022 - 2026</p>
                            <img src="/graduate.png" alt="graduate-icon"></img>
                            <h2>Bachelor Of Technology</h2>
                            <p>in</p>
                            <h3>Artificial Intelligence and Data Science</h3>
                            <p>at</p>
                            <h3>Chennai Institute Of Technology</h3>
                        </div>
                    </div>
                </section>
            </div>
        </Element>
    );
}

export default Education;
