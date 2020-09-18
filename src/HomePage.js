import React from 'react';
import './App.css';
import desktopImage from './happy.JPG';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
// import mobileImage from './pineapple-mobile.jpg';

const HomePage = () => {
    // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    const imageUrl = desktopImage;

    return (
        <div className="App" style={{ backgroundImage: `url(${imageUrl})`, marginTop: '70px' }}>
            <div className="App-content">
                <h1 style={{ margin: '10px', color: '#173532' }}><font size="+8">Hi, my name is Shivamm Gupta</font></h1>
                <h2 style={{ margin: '20px', color: '#173532' }}>Data Scientist | Software Engineer</h2>
                <div style={{ marginTop: '10px' }}>
                    <a href="mailto:shivammgupta09@gmail.com"><EmailIcon style={{ marginRight: '10px', color: "black" }} className="icon-top" /></a>
                    <a href="https://www.linkedin.com/in/shivammgupta09/"><LinkedInIcon style={{ marginRight: '10px', color: "black" }} className="icon-top" /></a>
                    <a href="https://github.com/Shivamm09"><GitHubIcon style={{ marginRight: '10px', color: "black" }} className="icon-top" /></a>
                </div>

            </div>
        </div>
    );
};

export default HomePage;