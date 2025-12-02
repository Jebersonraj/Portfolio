import React from 'react';
import './Achievements.css';
import {Element} from "react-scroll";

const Achievements = () => {
    return (
        <Element className="achievement-container" name="achievements">
            <div className="header-section">
                <h2 className="subtitle">My Coding Journey</h2>
                <h1 className="title">Developer <span className="highlight">Achievements</span></h1>
                <div className="divider"></div>
            </div>

            <div className="grid-layout">
                <div className="card leetcode-card">
                    <div className="card-header">
                        <div className="icon-box">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.172 5.79a1.374 1.374 0 0 0-.01 1.942l.353.362c.636.652 1.66.66 2.308.018l2.946-2.924a3.84 3.84 0 0 1 5.378-.052c1.494 1.458 1.523 3.905.064 5.402l-6.884 7.062a.498.498 0 0 1-.722-.016l-1.464-1.571a3.784 3.784 0 0 1-.065-5.27l1.04-1.127a1.375 1.375 0 0 0 .013-1.944l-.356-.367a1.376 1.376 0 0 0-1.945-.011l-1.04 1.126a6.536 6.536 0 0 0 .11 9.102l1.464 1.57a3.245 3.245 0 0 0 4.707.108l6.883-7.061c2.812-2.885 2.756-7.6-.124-10.413C17.96 1.056 15.688 0 13.483 0z"/>
                            </svg>
                        </div>
                        <h3>LeetCode Stats</h3>
                    </div>

                    <div className="stat-row">
                        <div className="stat-item big">
                            <span className="number">900+</span>
                            <span className="label">Problems Solved</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">Top 9.63%</span>
                            <span className="label">Global Ranking</span>
                        </div>
                    </div>
                    <div className="graph-container">
                        <svg viewBox="0 0 300 50" className="graph-line">
                            <path d="M0,50 Q20,40 40,45 T80,30 T120,20 T180,25 T240,10 T300,5" fill="none" stroke="#ff6b00" strokeWidth="3" />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,50 Q20,40 40,45 T80,30 T120,20 T180,25 T240,10 T300,5 V50 H0 Z" fill="url(#gradient)" />
                        </svg>
                    </div>
                </div>
                <div className="card codechef-card">
                    <div className="card-header">
                        <div className="icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h3>CodeChef Ranking</h3>
                    </div>
                    <div className="rating-display">
                        <span className="rating-number">1554</span>
                        <span className="rating-stars">★★★</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{width: '85%'}}></div>
                    </div>
                </div>
                <div className="card hackathon-card">
                    <div className="card-header">
                        <div className="icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                        </div>
                        <h3>Code Symphony Winner</h3>
                    </div>
                    <div className="trophy-content">
                        <p className="hackathon-title">Tech Challenge 2024</p>
                        <span className="badge">1st Place</span>
                    </div>
                </div>
            </div>
        </Element>
    );
};
export default Achievements;