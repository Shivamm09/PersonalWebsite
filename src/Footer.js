import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ height: '100px', backgroundColor: 'rgba(0,0,0,0.7)', paddingBottom: "80px" }}>

            <Grid item xs={12} md={4}>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white' }}>
                    Shivamm Gupta
                </Typography>

                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white' }}>
                    shivammgupta09@gmail.com
                </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white', paddingTop: "10px" }}>
                    <a href='href="mailto:shivammgupta09@gmail.com'><MailIcon style={{ color: 'white', paddingRight: '10px' }} className="icon" /></a>
                    <a href='https://github.com/Shivamm09'><GitHubIcon style={{ color: 'white', paddingRight: '10px' }} className="icon" /></a>
                    <a href='https://www.linkedin.com/in/shivammgupta09/'><LinkedInIcon style={{ color: 'white', marginRight: '30px' }} className="icon" /></a>
                </Typography>
            </Grid>

        </Grid >

    )
}

export default Footer;