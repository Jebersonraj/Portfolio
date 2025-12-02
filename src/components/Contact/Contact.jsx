import React from 'react';
import {Element} from "react-scroll";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import "./contact.css";
function Contact() {
    return (
        <Element className="Contact" name="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-container">
                <p>
                    E-mail : <span>jebersonraj7@gmail.com</span>
                </p>
                <p onClick={() => window.location.href = "https://github.com/Jebersonraj"}>
                    Github : <span>Jebersonraj</span>
                </p>
                <p onClick={() => window.location.href = "https://www.linkedin.com/in/jeberson-raj-0a324a26b/"}>
                    Linkedin: <span>Jeberson raj</span>
                </p>
                <p onClick={() => window.location.href = "https://leetcode.com/u/Jeberson_raj/"}>
                    Leetcode : <span>Leetcode</span>
                </p>
                <div className="contact-icon">
                    <LinkedInIcon onClick={() => window.location.href = "https://www.linkedin.com/in/jebersonraj/"}/>
                    <GitHubIcon onClick={() => window.location.href = "https://github.com/Jebersonraj/"}/>
                    <CodeIcon onClick={()=> window.location.href = "https://leetcode.com/u/Jeberson_raj/"}/>
                    <EmailIcon className="email-icon" onClick={() => window.location.href = "mailto:jebersonraj7@gmail.com"}/>
                </div>
            </div>
        </Element>
    );
}

export default Contact;