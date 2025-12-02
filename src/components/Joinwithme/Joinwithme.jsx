import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './JoinWithMe.css';
import {Element} from "react-scroll";

const JoinWithMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });
    const [openToast, setOpenToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenToast(true);
        const subject = `Join Request from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AMobile: ${formData.mobile}%0D%0AEmail: ${formData.email}`;
        setTimeout(() => {
            window.location.href = `mailto:jebersonraj7@gmail.com?subject=${subject}&body=${body}`;
        }, 1000);
    };

    const handleCloseToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenToast(false);
    };

    return (
        <Element className="join-container" name="joinwithme">
            <div className="join-card">
                <div className="join-header">
                    <h2 className="join-subtitle">Let's Connect</h2>
                    <h1 className="join-title">Join <span className="highlight">With Me</span></h1>
                    <p className="join-desc">Collaborate on projects, hackathons, or just say hi.</p>
                </div>

                <form className="join-form" onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="+91 00000 00000"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">G-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="youremail@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>

                </form>
            </div>
            <Snackbar
                open={openToast}
                autoHideDuration={4000}
                onClose={handleCloseToast}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseToast}
                    severity="success"
                    variant="filled"
                    sx={{
                        width: '100%',
                        bgcolor: '#ff6b00',
                        color: '#000',
                        fontWeight: 'bold',
                        '& .MuiAlert-icon': {
                            color: '#000'
                        }
                    }}
                >
                    Details Submitted! Opening Email...
                </Alert>
            </Snackbar>

        </Element>
    );
};

export default JoinWithMe;