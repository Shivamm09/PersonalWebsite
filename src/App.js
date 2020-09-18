import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TopMenu from './TopMenu.js'
import AboutMe from './AboutMe.js'
import HomePage from './HomePage.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Skills from "./Skills.js"
import { Grid } from '@material-ui/core';
import Certifications from './Certifications.js';
import Footer from './Footer.js';
import particleParams from './ParticleParams.js';
import Particles from 'react-particles-js';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class App extends React.Component {
  render() {
    return (
      <>
        <Particles className='particles'
          params={particleParams}
          style={{ backgroundColor: 'black' }} />

        <TopMenu />
        <HomePage />
        <AboutMe />
        <Experience />
        <Projects />

        <hr style={{ border: '0.5px solid black', width: '90%' }}></hr>

        <Grid container direction="row" justify="center" alignItems="center"
          style={{ marginBottom: '60px', marginTop: '60px', backgroundColor: 'rgba(102, 252, 242,0.7)' }}>
          <Grid item lg={8} md={12}>
            <Skills />
          </Grid>
          <Grid item lg={4} md={12}>
            <Certifications />
          </Grid>
        </Grid>

        <Footer />
        <Fab color="secondary" size="small" aria-label="scroll back to top"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px"
          }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </>
    )
  }
}

export default App;
