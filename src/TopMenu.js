import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const TopMenu = () => (
  <AppBar position="static" style={{
    backgroundColor: "black", color: '#66fcf1',
    position: "fixed", top: "0", width: '100%'
  }}>
    <Toolbar>
      <Button className="toolbar" edge="start" color="inherit" aria-label="menu" onClick={() => window.location.href = "#AboutMe"}>
        About Me
          </Button>
      <Button className="toolbar" edge="start" color="inherit" aria-label="menu" onClick={() => window.location.href = "#WorkExperience"}>
        Work Experience
          </Button>

      <Button className="toolbar" edge="start" color="inherit" aria-label="menu" onClick={() => window.location.href = "#Projects"}>
        Projects
          </Button>
      <Button className="toolbar" edge="start" color="inherit" aria-label="menu" onClick={() => window.location.href = "#Skills"}>
        Skills
          </Button>



    </Toolbar>
  </AppBar>

)


export default TopMenu;