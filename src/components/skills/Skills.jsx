import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import './Skills.css';

const skillsData = [
    { name: "React", value: 90 },
    { name: "Next.js", value: 72 },
    { name: "MySQL", value: 80 },
    { name: "Node.js", value: 80 },
    { name: "Java", value: 90 },
    { name: "Cloud Services", value: 55 },
    { name: "DSA", value: 85 },
    { name: "Python", value: 80 },
    { name: "Data Science", value: 70 },
    { name: "PySpark", value: 60 }
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <Element name="skills" className="skills-section">
            <div className="skills-container" ref={sectionRef}>
                <h2 className="skills-title">Sill <span className="highlight">Set</span></h2>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => {
                        const strokeDashoffset = isVisible
                            ? circumference - (skill.value / 100) * circumference
                            : circumference;

                        return (
                            <div
                                className={`skill-card ${isVisible ? 'animate-in' : ''}`}
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="progress-circle">
                                    <svg width="120" height="120" viewBox="0 0 120 120">
                                        <circle
                                            className="bg-circle"
                                            cx="60"
                                            cy="60"
                                            r={radius}
                                        />
                                        <circle
                                            className="fg-circle"
                                            cx="60"
                                            cy="60"
                                            r={radius}
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                        />
                                    </svg>
                                    <div className="skill-percentage">
                                        {isVisible ? <CountUp end={skill.value} /> : 0}%
                                    </div>
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Element>
    );
};
const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 1500;
        if (end === 0) return;
        const incrementTime = Math.max(duration / end, 10);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [end]);
    return <>{count}</>;
};
export default Skills;