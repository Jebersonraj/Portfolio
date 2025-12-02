import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import "./Skills.css";
import { LinearProgress } from '@mui/material';

function SkillBar({ value, color }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= value) {
                    clearInterval(timer);
                    return value;
                }
                return prev + 2;
            });
        }, 20);

        return () => clearInterval(timer);
    }, [value]);

    return <LinearProgress variant="determinate" value={progress} color={color} />;
}

function Skills() {
    return (
        <Element className="skill-container" name="skills">
            <div className="skills-image">
                <img src="/src/assets/skills-img.png" alt="skills-img" />
            </div>
            <div className="skill-text">
                <h1>Skills</h1>
                <div className="skill-outer">
                    <h4>React</h4>
                    <SkillBar value={90} color="success" />
                </div>
                <div className="skill-outer">
                    <h4>Next.js</h4>
                    <SkillBar value={70} color="secondary" />
                </div>
                <div className="skill-outer">
                    <h4>MySQL</h4>
                    <SkillBar value={80} color="success" />
                </div>
                <div className="skill-outer">
                    <h4>Node.js</h4>
                    <SkillBar value={80} color="warning" />
                </div>
                <div className="skill-outer">
                    <h4>Java</h4>
                    <SkillBar value={90} color="success" />
                </div>
                <div className="skill-outer">
                    <h4>Cloud</h4>
                    <SkillBar value={55} color="error" />
                </div>
                <div className="skill-outer">
                    <h4>DSA</h4>
                    <SkillBar value={85} color="success" />
                </div>
                <div className="skill-outer">
                    <h4>Python</h4>
                    <SkillBar value={80} color="secondary" />
                </div>
            </div>
        </Element>
    );
}

export default Skills;
