import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const WorkExp = (props) => {
  const [toggle, setToggle] = useState(false);
  const AccordionSummary = withStyles({
    root: {
      flexDirection: "column"
    },
    content: {
      marginBottom: 0
    },
    expandIcon: {
      marginRight: 0,
      paddingTop: 0
    }
  })(MuiAccordionSummary);
  return (
    <Grid item>
      <Grid container direction="column" justify="center" alignItems="center"
        style={{ marginTop: "0px", backgroundColor: 'white', color: 'black', border: '0.5px solid black', borderRadius: '7px' }}>

        <Grid item>
          <Typography
            variant='h4'
            style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }}>{props.jobTitle}</Typography>
          <hr style={{ width: "40%" }}></hr>

        </Grid>

        <Grid item>
          <h2>{props.company + ' | ' + props.date}</h2>
        </Grid>

        <Grid item>

          <Accordion style={{ color: 'black', backgroundColor: 'transparent' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "white", marginLeft: '30px', marginRight: '30px' }}>
              <Typography
                align='left'
                style={{ fontSize: '24px' }}>
                {props.description}
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Grid>

      </Grid>
    </Grid>
  )

}

export default WorkExp;